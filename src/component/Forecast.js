import React from 'react';
import WeatherIcon from './WeatherIcon';

const Forecast = ({ weatherForecast }) => {
  const forecastData = weatherForecast.data.list;

  const weekDay = new Array(7);
  weekDay[0] = 'Monday';
  weekDay[1] = 'Tuesday';
  weekDay[2] = 'Wednesday';
  weekDay[3] = 'Thursday';
  weekDay[4] = 'Friday';
  weekDay[5] = 'Saturday';
  weekDay[6] = 'Sunday';

  const today = new Date().getDay() - 1;

  const dayCalcul = (x) => {
    if (today + x >= 7) {
      return weekDay[today + (x - 7)];
    } else return weekDay[today + x];
  };

  return (
    <div>
      <div id='forecast-container'>
        {/* <div id='forecast-title'>5-day forecast</div> */}

        <div id='forecast-allday'>
          <div id='forecast-day'>
            <div>Today</div>
            <div id='forecast-icon'>
              <WeatherIcon code={forecastData[0].weather[0].id} />{' '}
            </div>
            <div id='forecast-temp'>
              <div id='forecast-temp-min'>
                {(forecastData[0].temp.min - 273.15).toFixed(0) + ' °'}
              </div>
              <div>-</div>
              <div id='forecast-temp-max'>
                {(forecastData[0].temp.max - 273.15).toFixed(0) + ' °'}
              </div>
            </div>
          </div>

          <div id='forecast-day'>
            <div>{dayCalcul(1)}</div>
            <div id='forecast-icon'>
              <WeatherIcon code={forecastData[1].weather[0].id} />
            </div>
            <div id='forecast-temp'>
              <div id='forecast-temp-min'>
                {(forecastData[1].temp.min - 273.15).toFixed(0) + ' °'}
              </div>
              <div>-</div>
              <div id='forecast-temp-max'>
                {(forecastData[1].temp.max - 273.15).toFixed(0) + ' °'}
              </div>
            </div>
          </div>

          <div id='forecast-day'>
            <div>{dayCalcul(2)}</div>
            <div id='forecast-icon'>
              <WeatherIcon code={forecastData[2].weather[0].id} />
            </div>
            <div id='forecast-temp'>
              <div id='forecast-temp-min'>
                {(forecastData[2].temp.min - 273.15).toFixed(0) + ' °'}
              </div>
              <div>-</div>
              <div id='forecast-temp-max'>
                {(forecastData[2].temp.max - 273.15).toFixed(0) + ' °'}
              </div>
            </div>
          </div>

          <div id='forecast-day'>
            <div>{dayCalcul(3)}</div>
            <div id='forecast-icon'>
              <WeatherIcon code={forecastData[3].weather[0].id} />
            </div>
            <div id='forecast-temp'>
              <div id='forecast-temp-min'>
                {(forecastData[3].temp.min - 273.15).toFixed(0) + ' °'}
              </div>
              <div>-</div>
              <div id='forecast-temp-max'>
                {(forecastData[3].temp.max - 273.15).toFixed(0) + ' °'}
              </div>
            </div>
          </div>

          <div id='forecast-day'>
            <div>{dayCalcul(4)}</div>
            <div id='forecast-icon'>
              <WeatherIcon code={forecastData[4].weather[0].id} />
            </div>
            <div id='forecast-temp'>
              <div id='forecast-temp-min'>
                {(forecastData[4].temp.min - 273.15).toFixed(0) + ' °'}
              </div>
              <div>-</div>
              <div id='forecast-temp-max'>
                {(forecastData[4].temp.max - 273.15).toFixed(0) + ' °'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
