/* Base URL Geo URL API Key */
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const GEO_URL = import.meta.env.VITE_GEO_URL;
/*  */

/* getCurrent Weather ByCity */
export const getCurrentWeatherByCity = async city => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(
          `City ${city} not found, plase check spelling and try again.`,
        );
      } else if (response.status === 401) {
        throw new Error(
          'Invalid API Key, Plase check yout OpenWeatherMap Api Configuration',
        );
      } else {
        throw new Error(
          'Weather Service is temporaryily unavailable. Plase try again latter.',
        );
      }
    }
    const data = await response.json();
    if (!data.dt) {
      data.dt = Math.floor(new Date.now() / 1000);
    }

    return data;
  } catch (err) {
    if (err instanceof TypeError && err.message.includes('fetch')) {
      throw new Error(
        ' Network error plase check your internet connection and plase try again..',
        { cause: err },
      );
    }
    throw err;
  }
};

/* get Current Weather ByCoords */
export const getCurrentWeatherByCoords = async (lat, lon) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
    );
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error(
          'Invalid API Key, Plase check yout OpenWeatherMap Api Configuration',
        );
      } else {
        throw new Error(
          'Weather Service is temporaryily unavailable. Plase try again latter.',
        );
      }
    }
    const data = await response.json();
    if (!data.dt) {
      data.dt = Math.floor(new Date.now() / 1000);
    }
  } catch (err) {
    if (err instanceof TypeError && err.message.includes('fetch')) {
      throw new Error(
        ' Network error plase check your internet connection and plase try again..',
        { cause: err },
      );
    }
    throw err;
  }
};

/* get Forecast by City */
export const getForecastByCity = async city => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`,
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(
          `City ${city} not found, plase check spelling and try again.`,
        );
      } else if (response.status === 401) {
        throw new Error(
          'Invalid API Key, Plase check yout OpenWeatherMap Api Configuration',
        );
      } else {
        throw new Error(
          'Weather Service is temporaryily unavailable. Plase try again latter.',
        );
      }
    }
    const data = await response.json();
    return data;
  } catch (err) {
    if (err instanceof TypeError && err.message.includes('fetch')) {
      throw new Error(
        ' Network error plase check your internet connection and plase try again..',
        { cause: err },
      );
    }
    throw err;
  }
};

/* search Suggestion by city*/
export const getSearchSuggestionByquary = async query => {
  try {
    const response = await fetch(
      `${GEO_URL}/direct?q=${query}&limit=5&appid=${API_KEY}`,
    );

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error(
          'Invalid API Key, Plase check yout OpenWeatherMap Api Configuration',
        );
      } else {
        throw new Error(
          'Weather Service is temporaryily unavailable. Plase try again latter.',
        );
      }
    }
    const data = await response.json();
    return data;
  } catch (err) {
    if (err instanceof TypeError && err.message.includes('fetch')) {
      throw new Error(
        ' Network error plase check your internet connection and plase try again..',
        { cause: err },
      );
    }
    throw err;
  }
};
