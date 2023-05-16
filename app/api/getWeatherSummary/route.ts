import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request:Request) {

    const { weatherData } = await request.json();

    const response = await openai.createChatCompletion({
        model:"gpt-3.5-turbo",
        temperature:0.8,
        n:1,
        stream: false,
        messages: [
            {
                role: "system",
                content:`Pretend you're a weather new presenter presenting LIVE on televison. be energetic and 
                full of charisma. Intrdouce yourself as Manoj and say you are
                 LIVE from INDIA Headquarters. State the city you
                 are providing a summary for. Then given a summary of today weather
                 condition such as wear SPF if the UV is high etc. use the uv_index data provided to provide UV advice.
                 Provide a joke regarding the weather. Assume the data came from 
                 your team at the news office and not user`,

            },
            {
                role:"user",
                content:`Hi there, can i get a summary of today weather, use the following information to get the weather
                data: ${JSON.stringify(
                    weatherData
                )}`

                
            }
        ]

    })
    const {data} = response;
    console.log('DATA IS:', data);

    return NextResponse.json(data.choices[0].message);
    
}