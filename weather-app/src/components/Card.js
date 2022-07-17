import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/tr";
import data from "../data/cities.json";
import { useEffect, useState } from "react";
import axios from "axios";

dayjs.extend(relativeTime);
dayjs.locale("tr");

function Card({ city }) {
  const [weather, setWeather] = useState("");

  const coordinates = data.find((a) => a.name === city);
  const { latitude, longitude } = coordinates;

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=tr`
    ).then((res) => setWeather(res));
  }, [city]);

  return (
    <>
      {weather &&
        weather.data.daily.map((forecast, i) => (
          <div
            key={i}
            className="border-2 bg-slate-700 w-60 border-slate-400 p-4 pb-10 my-2 flex items-center flex-col justify-center rounded-lg text-violet-300 font-bold"
          >
            <div className="flex justify-center  text-xl ">
              {dayjs.unix(forecast.dt).format("DD/MM/YYYY")}
            </div>
            <ul className="flex flex-col items-center">
              <li>
                <img
                  alt={forecast.weather.icon}
                  className="flex items-center"
                  src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                />
              </li>
              <li>Beklenen sıcaklık: {forecast.feels_like.day}</li>
              <li>
                {forecast.weather[0].description.charAt(0).toUpperCase() +
                  forecast.weather[0].description.slice(1)}
              </li>
              <li>Max sıcaklık: {forecast.temp.max}</li>
              <li>Min sıcaklık: {forecast.temp.min}</li>
            </ul>
          </div>
        ))}
    </>
  );
}

export default Card;
