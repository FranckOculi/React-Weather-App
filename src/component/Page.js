import React, { useState } from 'react';
import CurrentWeather from './CurrentWeather';
import Header from './Header';
import Search from './Search';
import useCurrentWeather from '../hook/useCurrentWeather';
import Forecast from './Forecast';

const Page = () => {
  const [currentData, setCurrentData] = useState();
  const [forecastData, setForecastData] = useState();
  const onSubmit = async (location) => {
    setCurrentData(await useCurrentWeather.submitRequest(location));
    setForecastData(await useCurrentWeather.submitRequestForecast(location));
    return setCurrentData;
  };

  return (
    <div id='page'>
      <Header />
      <Search submitSearch={onSubmit} />
      {currentData ? <CurrentWeather weatherData={currentData} /> : ''}
      {forecastData ? <Forecast weatherForecast={forecastData} /> : ''}
    </div>
  );
};

export default Page;
