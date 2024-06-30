// src/components/WeatherDisplay.tsx
import React from 'react';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like:number;
  };
  weather: {
    description: string;
  }[];
}

interface WeatherDisplayProps {
  data: WeatherData | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="border border-2-black p-4 rounded shadow-md  text-center">
      <h2 className="text-2xl">{data.name}</h2>
      <p>{data.weather[0].description}</p>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Feels Like :{data.main.feels_like} C </p>
      <p>Humidity: {data.main.humidity}%</p>
    </div>
  );
};

export default WeatherDisplay;
