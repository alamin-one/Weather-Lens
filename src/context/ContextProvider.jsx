/* eslint-disable react-refresh/only-export-components */
import { useContext, useState } from 'react';
import {
  getCurrentWeatherByCity,
  getCurrentWeatherByCoords,
  getForecastByCity,
  getSearchSuggestionByquary,
} from '../services/weatherAPI';
import weatherContext from './createContext';

/* custom hook  */
export const useWeatherContext = () => {
  return useContext(weatherContext);
};

/* provide context */
const ContextProvider = ({ children }) => {
  /* local state */
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentW, setCurrentW] = useState();
  const [forecast, setForecast] = useState([]);
  const [unit, setUnit] = useState('C');

  /* weatherBy city => return current weather and forecast  */
  const weatherByCity = async city => {
    try {
      setError(false);
      setLoading(true);

      const [W, F] = await Promise.all([
        getCurrentWeatherByCity(city),
        getForecastByCity(city),
      ]);

      setCurrentW(W);
      setForecast(F);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err instanceof Error ? err.message : 'Something is rong..!!');
    }
  };

  /* weatherby coords => return current weather and forecast */
  const weatherByCoords = () => {
    navigator.geolocation.getCurrentPosition(
      async position => {
        try {
          setError(false);
          setLoading(true);
          const { latitude, longitude } = position.coords;
          const weatherC = await getCurrentWeatherByCoords(latitude, longitude);
          setCurrentW(weatherC);
          const cityname = weatherC.name;
          const cForecast = await getForecastByCity(cityname);
          setForecast(cForecast);
          setLoading(false);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Somthing is rong');
        }
      },
      err => {
        setError(err instanceof Error ? err.message : 'Somthing is rong');
      },
    );
  };

  const value = {
    error,
    loading,
    currentW,
    forecast,
    unit,
    setUnit,
    weatherByCity,
    weatherByCoords,
    getSearchSuggestionByquary,
  };
  return (
    <>
      <weatherContext.Provider value={value}>
        {children}
      </weatherContext.Provider>
    </>
  );
};

export default ContextProvider;
