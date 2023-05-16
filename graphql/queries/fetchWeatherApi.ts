import { gql } from "@apollo/client";

const fetchWeatherQuery = gql`
  query MyQuery(
    $current_weather: String
    $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant"
    $hourly: String = "temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,rain,showers,snowfall,snow_depth,weathercode,pressure_msl,surface_pressure,cloudcover,cloudcover_low,cloudcover_mid,cloudcover_high,visibility,vapor_pressure_deficit,uv_index,uv_index_clear_sky"
    $latitude: String!
    $longitude: String!
    $timezone: String!
  ) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        precipitation_hours
        precipitation_probability_max
        precipitation_sum
        rain_sum
        showers_sum
        snowfall_sum
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
        winddirection_10m_dominant
        windgusts_10m_max
        windspeed_10m_max
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        precipitation_hours
        precipitation_probability_max
        precipitation_sum
        rain_sum
        showers_sum
        snowfall_sum
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
        winddirection_10m_dominant
        windgusts_10m_max
        windspeed_10m_max
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        cloudcover
        cloudcover_high
        cloudcover_low
        cloudcover_mid
        dewpoint_2m
        precipitation_probability
        pressure_msl
        rain
        relativehumidity_2m
        showers
        snow_depth
        snowfall
        surface_pressure
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        vapor_pressure_deficit
        visibility
        weathercode
      }
      hourly_units {
        apparent_temperature
        cloudcover
        cloudcover_high
        cloudcover_low
        cloudcover_mid
        dewpoint_2m
        precipitation_probability
        pressure_msl
        rain
        relativehumidity_2m
        showers
        snow_depth
        snowfall
        surface_pressure
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        vapor_pressure_deficit
        visibility
        weathercode
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`;

export default fetchWeatherQuery;
