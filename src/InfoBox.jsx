import { useEffect, useRef } from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import "./backVideo.css";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const audioRef = useRef(null);

  const ATMOSHPHERE_URL =
    "https://videos.pexels.com/video-files/31992923/13634117_1920_1080_30fps.mp4";
  const SNOW_URL =
    "https://videos.pexels.com/video-files/1856985/1856985-hd_1920_1080_25fps.mp4";
  const THUNDER_URL =
    "https://videos.pexels.com/video-files/2657691/2657691-hd_1920_1080_30fps.mp4";
  const RAINY_URL =
    "https://videos.pexels.com/video-files/3816627/3816627-hd_1920_1080_30fps.mp4";
  const CLEAR_URL =
    "https://videos.pexels.com/video-files/3275762/3275762-hd_1920_1080_30fps.mp4";
  const COLD_URL =
    "https://videos.pexels.com/video-files/1779202/1779202-hd_1280_720_25fps.mp4";
  const CLOUDY_URL =
    "https://videos.pexels.com/video-files/1779202/1779202-hd_1280_720_25fps.mp4";
  const WINDY_URL =
    "https://videos.pexels.com/video-files/3275762/3275762-hd_1920_1080_30fps.mp4";
  const MILD_URL =
    "https://videos.pexels.com/video-files/31985086/13629832_1920_1080_30fps.mp4";

  const FEW_URL =
    "https://videos.pexels.com/video-files/2818564/2818564-uhd_2560_1440_24fps.mp4";
  const SCATTERED_URL =
    "https://videos.pexels.com/video-files/2815411/2815411-uhd_1920_1440_24fps.mp4";
  const OVERCAST_URL =
    "https://videos.pexels.com/video-files/4318100/4318100-uhd_2560_1440_30fps.mp4";

  const ATMOSHPHERE_MUSIC_URL = "/music/dry-music.mp3";
  const SNOW_MUSIC_URL = "/music/snow.mp3";
  const THUNDER_MUSIC_URL = "/music/thunder-music.mp3";
  const RAINY_MUSIC_URL = "/music/rainy-music.mp3";
  const COLD_MUSIC_URL = "/music/cold-music.mp3";
  const CLOUDY_MUSIC_URL = "/music/cold-music.mp3";
  const CLEAR_MUSIC_URL = "/music/windy-music.mp3";
  const FEW_MUSIC_URL = "/music/few.mp3";
  const SCATTERED_MUSIC_URL = "/music/overacast.mp3";
  const OVERCAST_MUSIC_URL = "/music/overacast.mp3";
  const WINDY_MUSIC_URL = "/music/windy-music.mp3";
  const MILD_MUSIC_URL = "/music/windy-music.mp3";

  const weather = info.weather?.toLowerCase() || "";

  let selectedVideo;
  let selectedMusic;

  if (weather.includes("thunderstorm")) {
    selectedVideo = THUNDER_URL;
    selectedMusic = THUNDER_MUSIC_URL;
  } else if (
    weather.includes("snow") ||
    weather.includes("sleet") ||
    weather.includes("rain and snow")
  ) {
    selectedVideo = SNOW_URL;
    selectedMusic = SNOW_MUSIC_URL;
  } else if (weather.includes("drizzle")) {
    selectedVideo = RAINY_URL;
    selectedMusic = RAINY_MUSIC_URL;
  } else if (weather.includes("rain")) {
    selectedVideo = RAINY_URL;
    selectedMusic = RAINY_MUSIC_URL;
  } else if (weather.includes("sky")) {
    selectedVideo = CLEAR_URL;
    selectedMusic = CLEAR_MUSIC_URL;
  } else if (weather.includes("few")) {
    selectedVideo = FEW_URL;
    selectedMusic = FEW_MUSIC_URL;
  } else if (weather.includes("overcast")) {
    selectedVideo = OVERCAST_URL;
    selectedMusic = OVERCAST_MUSIC_URL;
  } else if (weather.includes("scattered")) {
    selectedVideo = SCATTERED_URL;
    selectedMusic = SCATTERED_MUSIC_URL;
  } else if (weather.includes("cloud")) {
    selectedVideo = CLOUDY_URL;
    selectedMusic = CLOUDY_MUSIC_URL;
  } else if (
    weather.includes("mist") ||
    weather.includes("fog") ||
    weather.includes("haze") ||
    weather.includes("dust") ||
    weather.includes("smoke") ||
    weather.includes("ash") ||
    weather.includes("sand") ||
    weather.includes("squalls") ||
    weather.includes("tornado")
  ) {
    selectedVideo = ATMOSHPHERE_URL;
    selectedMusic = ATMOSHPHERE_MUSIC_URL;
  } else {
    // Fallback: unknown or unclassified weather
    selectedVideo = MILD_URL;
    selectedMusic = MILD_MUSIC_URL;
  }

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.pause(); // stop previous audio
      audio.src = selectedMusic; // set new source
      audio.load(); // reload audio element
      audio.play().catch((err) => {
        console.warn("Autoplay blocked or failed:", err);
        // Optionally: wait for user interaction to retry
        const handleInteraction = () => {
          audio.play().catch((e) => console.warn("Still blocked:", e));
          document.removeEventListener("click", handleInteraction);
        };
        document.addEventListener("click", handleInteraction);
      });
    }
  }, [selectedMusic]); // Run every time music URL changes

  return (
    <div className="container">
      {/* Background Video */}
      <div className="videoBack">
        <video autoPlay loop muted key={selectedVideo}>
          <source src={selectedVideo} type="video/mp4" />
        </video>
      </div>

      {/* Background Music */}
      <audio ref={audioRef} loop />

      {/* Info Card */}
      <Card
        sx={{
          minWidth: 300,
          borderRadius: 2,
          backgroundColor: "rgba(255, 255, 255,0)",
          boxShadow: 3,
          border: "none",
        }}
      >
        <CardContent
          sx={{
            minWidth: 300,
            borderRadius: 2,
            backgroundColor: "transparent",
            boxShadow: 0,
          }}
        >
          <Typography
            className="text"
            level="h2"
            textColor="gold"
            sx={{
              mt: { xs: 4, sm: 6 },
              mb: { xs: 3, sm: 4 }, // Added bottom margin for spacing
              letterSpacing: { xs: "1.5px", sm: "2.5px" }, // Responsive letter spacing
              padding: { xs: "0.75rem 1.25rem", sm: "1rem 1.5rem" }, // Increased padding

              textShadow: "2px 2px 12px rgba(0, 0, 0, 0.8)", // Deeper shadow
              fontSize: { xs: "1.25rem", sm: "2rem" }, // Larger text on desktop
              fontWeight: "900", // Extra bold
              display: "inline-block",
              lineHeight: 1.3, // Better vertical rhythm
            }}
          >
            <span
              style={{
                color: "#FFA500",
                textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
              }}
            >
              {info.city}
            </span>
            &nbsp; woke up and chose{" "}
            <span
              style={{
                color: "#FFA500",
                textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
                fontWeight: "800",
                letterSpacing: "0.5px",
              }}
            >
              {info.weather}
            </span>{" "}
            today
          </Typography>
          <Typography
            className="text"
            textColor="#FFA500"
            sx={{
              mt: 1,
              letterSpacing: "2px",
              padding: "0.25rem 0.75rem",
              borderRadius: "6px",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
              display: "inline-block",
            }}
          >
            Temperature: {info.temp}°C
          </Typography>
          <Typography
            className="text"
            textColor="#FFA500"
            sx={{
              mt: 1,
              letterSpacing: "2px",
              padding: "0.25rem 0.75rem",
              borderRadius: "6px",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
              display: "inline-block",
            }}
          >
            Feels like: {info.feels_like}°C
          </Typography>

          <Typography
            className="text"
            textColor="#FFA500"
            sx={{
              mt: 1,
              letterSpacing: "2px",
              padding: "0.25rem 0.75rem",
              borderRadius: "6px",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
              display: "inline-block",
            }}
          >
            Wind Speed: {info.windSpeed}
          </Typography>
          <Typography
            textColor="#FFA500"
            sx={{
              letterSpacing: "2px", // Slightly wider letter spacing (was 0.5px)
              padding: "0.5rem 1rem", // Increased padding (was "0.25rem 0.75rem")
              borderRadius: "6px",
              textShadow: "1px 1px 9px rgba(0, 0, 0, 0.7)",
              display: "inline-block",
            }}
          >
            Humidity: {info.humidity}%
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
