import WeatherIcon from './WeatherIcon';
import { ForecastWeather, List } from '../types/weather';

type Props = {
  weatherForecast : ForecastWeather
}

type RenderForecastDayProps = {
  day: string 
  forecastData: List
}

const RenderForecastDay = ({day, forecastData} : RenderForecastDayProps) => {
  return(
    <div id='forecast-day'>
    <div>{day}</div>
    <div id='forecast-icon'>
      <WeatherIcon code={forecastData.weather[0].id} />{' '}
    </div>
    <div id='forecast-temp'>
      <div id='forecast-temp-min'>
        {(forecastData.temp.min - 273.15).toFixed(0) + ' °'}
      </div>
      <div>-</div>
      <div id='forecast-temp-max'>
        {(forecastData.temp.max - 273.15).toFixed(0) + ' °'}
      </div>
    </div>
  </div>
  )
}

const Forecast = ({ weatherForecast }: Props) => {
  const forecastData = weatherForecast.list;

  const weekDay = new Array(7);
  weekDay[0] = 'Monday';
  weekDay[1] = 'Tuesday';
  weekDay[2] = 'Wednesday';
  weekDay[3] = 'Thursday';
  weekDay[4] = 'Friday';
  weekDay[5] = 'Saturday';
  weekDay[6] = 'Sunday';

  const today = new Date().getDay() - 1;

  const returnDay = (x: number) => {
    if (today + x >= 7) {
      return weekDay[today + (x - 7)];
    } else return weekDay[today + x];
  };

  return (
    <div>
      <div id='forecast-container'>
        <div id='forecast-title'>5-day forecast</div>
        <div id='forecast-allday'>
          {
            forecastData?.map((data, index) => (
              <RenderForecastDay 
              day={index === 0 ? "today" : returnDay(index)}
              forecastData={data}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Forecast;
