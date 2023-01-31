import React, { useState, useEffect } from "react";
import { MainForm } from "../../components/pure/forms/MainForm";
import { Modal } from "../../components/pure/Modal";
import axios from "axios";
import { Weather } from "../../components/pure/Weather";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSubmit = (e) => {
    const form = e.target;
    const citySearch = form.elements.city.value;
    console.log(citySearch);
    setCity(citySearch);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setCity("");
  };

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_API
      }`;

      const options = {
        timeout: 3000,
      };

      await axios
        .get(url, options)
        .then((res) => {
          console.log(res.data);
          setWeather(res.data);
          setIsModalOpen(true);
        })
        .catch((error) => error);
    };

    city !== "" && getData();
  }, [city]);

  return isModalOpen && weather ? (
    <Modal>
      <div
        className={"container"}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Weather data={weather} handleClose={handleClose} />
      </div>
    </Modal>
  ) : (
    <div className={"text-center h-auto border"}>
      <h1>Wheater App</h1>
      <MainForm handleSubmit={handleSubmit} />
    </div>
  );
};
