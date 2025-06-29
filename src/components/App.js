import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weather, setWeather] = useState({
    temperature: 25,
    conditions: "Sunny"
  });

  return (
    <div>
      <h2>Weather Display App</h2>
      <WeatherDisplay temperature={weather.temperature} conditions={weather.conditions} />
    </div>
  );
};

export default App;
