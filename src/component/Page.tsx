import { useState } from 'react';
import CurrentWeather from './CurrentWeather';
import Header from './Header';
import Search from './Search';
import Forecast from './Forecast';
import useWeather from '../hook/useWeather'
import { CurrentWeather as CurrentWeatherType, ForecastWeather } from '../types/weather';

const Page = () => {
  const [currentData, setCurrentData] = useState<CurrentWeatherType>();
  const [forecastData, setForecastData] = useState<ForecastWeather>();
  const {submitRequest, submitRequestForecast} = useWeather()

  const onSubmit = async (location: string) => {
    await submitRequest(location).then((response => {
      setCurrentData(response)
    }))

    await submitRequestForecast(location).then((response => {
      setForecastData(response)
    }))
  };

  return (
    <div id='page'>
      <Header />
      <Search submitSearch={onSubmit} />
      {currentData && <CurrentWeather weatherData={currentData} /> }
      {forecastData && <Forecast weatherForecast={forecastData} />}
    </div>
  );
};

export default Page;
