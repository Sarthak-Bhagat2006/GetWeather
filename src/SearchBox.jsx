import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { use, useState } from "react";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [err, setErr] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "2c29b1eb25c35dbc7f9ff2b469e2b502";

  let getWeatherInfo = async () => {
    let responce = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponce = await responce.json();
    console.log(jsonResponce);
    let result = {
      city: city,
      temp: jsonResponce.main.temp,
      tempMin: jsonResponce.main.temp_min,
      tempMax: jsonResponce.main.temp_max,
      humidity: jsonResponce.main.humidity,
      feels_like: jsonResponce.main.feels_like,
      windSpeed: jsonResponce.wind.speed,
      weather: jsonResponce.weather[0].description,
    };
    console.log(result);
    return result;
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    console.log(newInfo);
    updateInfo(newInfo);
  };
  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          sx={{
            "& label": {
              color: "#00bcd4",
            },
            "& label.Mui-focused": {
              color: "#00bcd4",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#00bcd4",
                borderWidth: "2px", // Thicker border
              },
              "&:hover fieldset": {
                borderColor: "#00bcd4",
                borderWidth: "2px", // Maintain thickness on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#00bcd4",
                borderWidth: "2px", // Maintain thickness on focus
              },
            },
            input: {
              color: "#1c1c1c",
              padding: "0.75rem 1rem",
              backgroundColor: "rgba(255, 255, 255, 0.1)", // semi-transparent background

              fontSize: "1rem",
              outline: "none",
              backdropFilter: "blur(1.2px)", // subtle blur effect for modern look
              width: "300px",
              transition: "border-color 0.3s ease",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
            },
          }}
        />
        <br />
        <br />
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "#0066ff", // Vivid blue for high visibility
            color: "#ffffff", // Crisp white text
            padding: "0.5rem 1.25rem", // Slightly more horizontal padding
            borderRadius: "8px", // Smoother rounded corners
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#0052cc", // Slightly darker on hover
            },
          }}
        >
          Search
        </Button>
      </form>
    </div>
  );
}
