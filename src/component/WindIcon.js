import React from 'react';

const WeatherIcon = (props) => {
  const Icon = '↓';
  let Rotate = '';
  let deg = props.wind;

  switch (true) {
    //North
    case deg >= 337.5:
    case deg < 22.5:
      Rotate = '0deg';
      break;

    //North-Est
    case deg >= 22.5 && deg < 67.5:
      Rotate = '45deg';
      break;

    //Est
    case deg >= 67.5 && deg < 112.5:
      Rotate = '90deg';
      break;

    //South-Est
    case deg >= 112.5 && deg < 157.5:
      Rotate = '135deg';
      break;

    //South
    case deg >= 157.5 && deg < 202.5:
      Rotate = '180deg';
      break;

    //South-West
    case deg >= 202.5 && deg < 247.5:
      Rotate = '225deg';
      break;

    //West
    case deg >= 247.5 && deg < 292.5:
      Rotate = '270deg';
      break;

    //North-West
    case deg >= 292.5 && deg < 337.5:
      Rotate = '315deg';
      break;

    default:
      Rotate = '0deg';
  }
  const divStyle = { transform: `rotate(${Rotate})` };
  return <div style={divStyle}>{Icon}</div>;
};

export default WeatherIcon;
