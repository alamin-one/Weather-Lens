import { useWeatherContext } from '../context/ContextProvider';
const useLIb = () => {
  const { currentW, forecast, unit } = useWeatherContext();
  const curdate = new Date(currentW?.dt * 1000).toDateString('en-BD');
  const curtime = new Date(currentW?.dt * 1000).toLocaleTimeString('en-BD', {
    hour: '2-digit',
    minute: '2-digit',
  });
  /* temp */
  const mainI = currentW?.main;
  const t = () => {
    return unit === 'C'
      ? Math.round(mainI?.temp)
      : Math.round((mainI?.temp * 9) / 5 + 32);
  };
  const curtemp = t();

  /* temp_max */
  const th = () => {
    return unit === 'C'
      ? Math.round(mainI?.temp_max)
      : Math.round((mainI?.temp_max * 9) / 5 + 32);
  };
  const temp_max = th();
  /*temp_min*/
  const tl = () => {
    return unit === 'C'
      ? Math.round(mainI?.temp_min)
      : Math.round((mainI?.temp_min * 9) / 5 + 32);
  };
  const temp_min = tl();
  /* wind speed */
  const wind = currentW?.wind;
  const speed = wind?.speed;

  /* wind deg */
  const directions = [
    'N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW', 'SW','WSW','W','WNW','NW','NNW',
  ];
  const d = wind?.deg;
  const deg = directions[Math.round(d / 22.5) % 16];

  /* sunrise  sunset*/
  const sys = currentW?.sys;
  const sunrise = new Date(sys?.sunrise * 1000).toLocaleTimeString('en-BD', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const sunset = new Date(sys?.sunset * 1000).toLocaleTimeString('en-BD', {
    hour: '2-digit',
    minute: '2-digit',
  });

  /* Forecast Filtered  */
  const filtered = forecast.list?.filter((_, F) => F % 8 === 0);
  const formatDay = dt => {
    return new Date(dt * 1000).toLocaleDateString('en-BD', {
      weekday: 'long',
    });
  };
  /* pop */
  const pop = pop => {
    return Math.round(pop * 100);
  };
  /* temp */
  const temp = temp => {
    return unit === 'C' ? Math.floor(temp) : Math.floor(temp * 9) / 5 + 32;
  };

  return {curdate,curtime,curtemp,temp_max,temp_min,unit,speed,deg,sunrise,sunset,filtered,formatDay,pop,temp,
  };
};

export default useLIb;
