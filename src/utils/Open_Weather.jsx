import React, { useEffect, useState } from "react";
import Home from "../component/Home";
import Weather from "../component/Weather";
import { OpenWeatherContext } from "../context/context";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";


  const api_key = import.meta.env.VITE_Open_Weather_Key;
  const city_name = "Rajshahi";

const Open_Weather = ({children}) => {

  
  const [wind, setWind] = useState("");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const [clouds, setClouds] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [weather_result, setResult] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const result = await axios(url);

        setResult(result.data);
        setWind(result.data.wind.speed);
        setTemp(result.data.main.temp);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      console.log("CLEAN UP");
    };
  }, []);

  return <>

    <OpenWeatherContext.Provider  value={{wind ,temp}}>
            {children}
        </OpenWeatherContext.Provider>
  </>;
};

export {Open_Weather};


