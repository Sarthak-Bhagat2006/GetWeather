import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherApp, setWeatherApp] = useState({
    city: "Delhi",
    temp: 30.05,
    tempMin: 30.05,
    tempMax: 30.05,
    humidity: 51,
    feels_like: 31.28,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherApp(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <br />
      <br />
      <br />
      <h1
        style={{
          color: "#FFD700", // Soothing blue
          textShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
          letterSpacing: "2px", // Soft shadow for depth
          fontWeight: "bold",
          fontSize: "2.5rem", // Scalable size
          textAlign: "center", // Centered alignment
          // margin: "1rem 0",
        }}
      >
        Search your city’s weather now.
      </h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherApp} />
    </div>
  );
}
