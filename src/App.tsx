// src/App.tsx
import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city: string) => {
    const API_KEY = '34d6f34dedf1a8db3e361c1fc3ab432a';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    try {
      const response = await axios.get(url);
      
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mx-auto">
      <Header />
      <WeatherForm onSearch={fetchWeather} />
      <WeatherDisplay data={weatherData} />
    </div>
  );
};

export default App;
