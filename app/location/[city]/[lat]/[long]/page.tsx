import React from "react";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherApi";
import { getClient } from "@/apollo-client";
import CalloutCard from "@/components/CalloutCard";
import StateCard from "@/components/StateCard";
import InformationPanel from "@/components/InformationPanel";
import TempCharts from "@/components/TempCharts";
import RainChart from "@/components/RainChart";
import getBasePath from "@/lib/getBasePath";
import cleanData from "@/lib/CleanData";
import TempChart from "@/components/TempChart";

export const revalidate=60;

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};
const WeatherPage = async ({ params: { city, lat, long } }: Props) => {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "GMT",
    },
  });

  const results: Root = data.myQuery;
  // console.log(results);
  const dataTosend = cleanData(results, city);

  const res = await fetch(`${getBasePath()}/api/getWeatherSummary`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      weatherData: dataTosend
    })
  })

  const GPTdata = await res.json();
  const { content } = GPTdata;




  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <InformationPanel city={city}
      lat={lat}
      long={long}
      results={results}
      />
      <div className="flex-1 p-5 lg:p-10">
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Today Overview</h2>
            <p className="text-sm text-gray-400">
              Last Updated at:{" "}
              {new Date(results.current_weather.time).toLocaleString()}(
              {results.timezone})
            </p>
          </div>

          <div className="m-2 mb-10">
            <CalloutCard message={content} />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <StateCard
              title="Maximum Temprature"
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}`}
              color="yellow"
            />

            <StateCard
              title="Minimum Temprature"
              metric={`${results.daily.temperature_2m_min[0].toFixed(1)}`}
              color="green"
            />

            <div>
              <StateCard
                title="UV Index"
                metric={results.daily.uv_index_max[0].toFixed(1)}
                color="rose"
              />
              {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
                <CalloutCard
                  message={"The UV is high today, be sure to wear SPF"}
                  warning
                />
              )}
            </div>
            <div className="flex space-x-3">
            <StateCard
                title="Wind Speed"
                metric={`${results.current_weather.windspeed.toFixed(1)}km/h`}
                color="cyan"
              />
                <StateCard
                title="Wind Direction"
                metric={`${results.current_weather.winddirection.toFixed(1)}°`}
                color="violet"
              />

            </div>
          </div>
        </div>
        <hr className="mb-5"/>
        <div className="space-y-3">
          {/* <TempCharts results={results}/> */}
          {/* <TempChart results={results}/> */}
          {/* <RainChart results={results}/> */}
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
