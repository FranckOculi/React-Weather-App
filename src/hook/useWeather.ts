import axios from 'axios';
import Key from '../api/Key';
import { CurrentWeather, ForecastWeather } from '../types/weather';

const useWeather = () => {
  const submitRequest = async(location: string) : Promise<CurrentWeather> => {
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = Key.API_KEY;

    return await axios(`${BASE_URL}?q=${location}&APPID=${API_KEY}`)
    .then(response => response.data)
    .catch(e => {throw new Error(e)})
  }

  const submitRequestForecast = async (location: string) : Promise<ForecastWeather> => {
    const BASE_URL_FORECAST = 'http://api.openweathermap.org/data/2.5/forecast/daily';
    const KEY_FORECAST = Key.API_KEY_FORECAST;

    return await axios(
      `${BASE_URL_FORECAST}?q=${location}&cnt=5&APPID=${KEY_FORECAST}`,
    )
    .then(response => response.data)
    .catch(e => {throw new Error(e)})
  }

  return {
    submitRequest,
    submitRequestForecast
  }
};

export default useWeather
