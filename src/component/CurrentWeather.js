import React from 'react';
import WeatherIcon from './WeatherIcon';
import Wind from './Wind';

const CurrentWeather = ({ weatherData }) => {
  const path = weatherData.data;

  const city = path.name;
  const country = path.sys.country;
  const temp = (path.main.temp - 273.15).toFixed(1);
  const temp_max = (path.main.temp_max - 273.15).toFixed(1);
  const temp_min = (path.main.temp_min - 273.15).toFixed(1);

  const IconNorth = '↑ ';
  const IconSouth = '↓ ';

  const day = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
  }).format(Date.now());

  return (
    <div>
      <div id='currentWeather-container'>
        <div id='vignette'>
          <div id='day'>{day}</div>
          <div id='city'>{city + ' (' + country + ')'}</div>
          <div id='temps'>
            <div id='temp'>{temp + ' ° c'}</div>
            <div id='temp-max-min'>
              <div id='max'>
                <div id='icon-north'>{IconNorth}</div>
                <div id='temp-max'>{temp_max + '°'}</div>
              </div>
              <div id='min'>
                <div id='icon-south'>{IconSouth}</div>
                <div id='temp-min'>{temp_min + '°'}</div>
              </div>
            </div>
          </div>
        </div>

        <div id='icon'>
          <WeatherIcon code={path.weather[0].id} />
        </div>
        <Wind wind={path.wind} />
      </div>
    </div>
  );
};

export default CurrentWeather;
