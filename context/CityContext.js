import React, { useState } from 'react';

const CityContext = React.createContext();

const CityProvider = ({ children }) => {
  const [city, setCity] = useState('THE WORLD');

  const data = {
    city,
    setCity,
  };

  return <CityContext.Provider value={data}>{children}</CityContext.Provider>;
};

export { CityProvider };
export default CityContext;
