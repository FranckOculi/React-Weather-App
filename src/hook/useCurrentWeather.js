import axios from 'axios';
import Key from '../api/Key';

export default {
  submitRequest: async (location) => {
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = Key.API_KEY;
    return await axios(`${BASE_URL}?q=${location}&APPID=${API_KEY}`);
  },
  submitRequestForecast: async (location) => {
    const BASE_URL_FORECAST =
      'http://api.openweathermap.org/data/2.5/forecast/daily';
    const KEY_FORECAST = Key.API_KEY_FORECAST;
    return await axios(
      `${BASE_URL_FORECAST}?q=${location}&cnt=5&APPID=${KEY_FORECAST}`,
    );
  },
};
