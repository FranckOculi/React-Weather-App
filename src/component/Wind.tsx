import WindIcon from './WindIcon';
import { Wind as WindType } from '../types/weather';

type Props = {
  wind: WindType
}

const Wind = ({ wind }: Props) => {
  const windSpeed = (wind.speed * 3.6).toFixed(0);

  return (
    <div id='wind'>
      <div id='wind-direction'>
        <WindIcon deg={wind.deg} />
      </div>
      <div id='wind-speed'>{windSpeed + ' km/h'} </div>
    </div>
  );
};

export default Wind;
