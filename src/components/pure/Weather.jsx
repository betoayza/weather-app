import React from "react";

export const Weather = ({ data }) => {
  const styleWeather = {
    color: "white",    
  };

  return (
    <div style={styleWeather} className={"text-center mb-5 h-auto"}>
      <h2>{data.name}</h2>
      <p>Latitude: {data.coord.lat}</p>
      <p>Longitude: {data.coord.lon}</p>
      <p>Resume: {data.weather[0].description}</p>
      <p>Wind degree: {data.wind.deg}</p>
      <p>Wind speed: {data.wind.speed}</p>
      <p>Clouds: {data.clouds.all}</p>
      <p>Sensation: {data.main.feels_like}</p>
      <p>Humidity: {data.main.humidity}</p>
      <p>Pressure: {data.main.pressure}</p>
      <p>Temperature: {data.main.temp}</p>
      <p>Max Temp.: {data.main.temp_max}</p>
      <p>Min Temp.: {data.main.temp_min}</p>
    </div>
  );
};
