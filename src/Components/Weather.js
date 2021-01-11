import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Weather.css";
const APIKEY = `388053a21f6b02d9812861c21150602f`;

const Weather = ({ latitude, longitude }) => {
  // console.log(latitude);
  // console.log(longitude);
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [temp, setTemp] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [humidity, setHumidity] = useState("");
  const [avgTemp, setAvgTemp] = useState("");
  const [description, setDescription] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [winDeg, setWindDeg] = useState("");
  const [icon, setIcon] = useState("");
  const [main, setMain] = useState("");

  useEffect(() => {
    const getWeatherData = async () => {
      const fetchDetails = await fetch(
        `//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`
      );

      const data = await fetchDetails.json();
      setMaxTemp(data.main.temp_max);
      setMinTemp(data.main.temp_min);
      setTemp(data.main.temp);
      setAvgTemp(data.main.feels_like);
      setHumidity(data.main.humidity);
      setDescription(data.weather[0].description);
      setIcon(data.weather[0].icon);
      setMain(data.weather[0].main);
      setSunrise(data.sys.sunrise);
      setSunset(data.sys.sunset);
      setWindDeg(data.wind.deg);
      setWindSpeed(data.wind.speed);
      console.log(data);
    };
    getWeatherData();
  }, []);
  const convertTime = (parameter) => {
    const date = parameter * 1000;
    const mDate = new Date(1609567497 * 1000).toString();
    console.log(mDate);
    const convDate = new Date(date).toString();
    return convDate;
  };
  return (
    <div>
      <ul className="list-group weatherElements">
        <li className="list-group-item">
          <SpanHeadingTag>Temperature Info</SpanHeadingTag>
          <li className="list-group-item">
            Maximum Temperture <SpanTag>{maxTemp} &deg;K</SpanTag>
          </li>
          <li className="list-group-item">
            Minimum Temperature <SpanTag>{minTemp} &deg;K</SpanTag>
          </li>
          <li className="list-group-item">
            Average Temperature <SpanTag>{avgTemp} &deg;K</SpanTag>
          </li>
          <li className="list-group-item">
            Scalable Temperature <SpanTag>{temp} &deg;K</SpanTag>
          </li>
        </li>
        <li className="list-group-item">
          <SpanHeadingTag>Weather Information Card</SpanHeadingTag>
          <li className="list-group-item">
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="image Weather"
            />
            The Weather Today appears to be <SpanTag> {description} </SpanTag>
            {""}
            with the temperature {""}
            <SpanTag> {temp}.</SpanTag>
            In short it is <SpanTag>{main}</SpanTag>
          </li>
          <li className="list-group-item">
            Wind Blows at speed of <SpanTag>{windSpeed} </SpanTag> with the
            degree of <SpanTag> {winDeg} </SpanTag>
          </li>

          <li className="list-group-item">
            Humidity in the area is <SpanTag> {humidity}</SpanTag>
          </li>
        </li>
        <li className="list-group-item">
          <SpanHeadingTag>Sunrise and Sunset</SpanHeadingTag>
          <li className="list-group-item">
            Sun will rise at <SpanTag>{convertTime(sunrise)} </SpanTag>
          </li>
          <li className="list-group-item">
            Sun will set at <SpanTag>{convertTime(sunset)}</SpanTag>
          </li>
        </li>
      </ul>
    </div>
  );
};

const SpanTag = styled.div`
  display: inline-block;
  font-size: 1.5rem;
  color: red;
  &:hover {
    color: white;
    background-color: red;
    font-family: cursive;
    cursor: pointer;
  }
`;
const SpanHeadingTag = styled.h2`
  font-family: cursive;
  color: red;
  display: inline-block;
  font-weight: 100;
  transition: all 0.4s ease-in-out;
  &:hover {
    color: white;
    background-color: red;
    transform: skewY(-2deg);
  }
`;
export default Weather;
