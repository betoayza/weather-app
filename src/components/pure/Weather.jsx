import React from "react";

export const Weather = ({ data, handleClose }) => {
  const styleWeather = {
    color: "white",
    display: "grid",
    placeItems: "center",
  };

  const styleIcon = {
    fontSize: "30px",
  };

  return (
    <div className={"vh-100 container p-3"} style={styleWeather}>
      <div className={"text-center mb-5"}>
        <button
          type="button"
          className="btn btn-dark mb-3"
          onClick={() => {
            handleClose();
          }}
        >
          <i className="bi-arrow-left-circle-fill"></i>
        </button>
        <h2 className={"mb-3"}>{data.name}</h2>
        <p>Latitude: {data.coord.lat}</p>
        <p>Longitude: {data.coord.lon}</p>
        <p style={{ color: "yellowgreen" }}>
          Resume: {data.weather[0].description}
        </p>
        <p>Wind degree: {data.wind.deg}</p>
        <p>Wind speed: {data.wind.speed} meter/sec</p>
        <p>Clouds: {data.clouds.all}%</p>
        <p style={{ color: "orange" }}>Sensation: {data.main.feels_like}</p>
        <p>Humidity: {data.main.humidity}%</p>
        <p>Pressure: {data.main.pressure} hPa</p>
        <p>Temperature: {data.main.temp} C°</p>
        <p style={{ color: "red" }}>Max Temp.: {data.main.temp_max} C°</p>
        <p style={{ color: "cyan" }}>Min Temp.: {data.main.temp_min} C°</p>
      </div>
    </div>
  );
};
