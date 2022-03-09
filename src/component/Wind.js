import React from 'react';
import WindIcon from './WindIcon';

const Wind = ({ wind }) => {
  const windSpeed = (wind.speed * 3.6).toFixed(0);

  return (
    <div id='wind'>
      <div id='wind-direction'>
        <WindIcon wind={wind.deg} />
      </div>
      <div id='wind-speed'>{windSpeed + ' km/h'} </div>
    </div>
  );
};

export default Wind;
