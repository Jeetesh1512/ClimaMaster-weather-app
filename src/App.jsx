import React, { useEffect, useState } from "react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { data } from "autoprefixer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [query, setQuery] = useState({ q: "london" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const city_name = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${city_name.toUpperCase()}`);

    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(`Featched weather data for ${data.name}, ${data.country}`);
      setWeather(data);
    });
    console.log(data);
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-gray-400 to-gray-600";
    const threshold = units === "metric" ? 20 : 69;
    if (weather.temp <= threshold) return "from-gray-400 to-gray-500";
    return "from-yellow-600 to-orange-700";
  };

  return (
    <>
      <section className="main">
        <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-white-400 from-blue-200 to-blue-500 ">
          <TopButtons setQuery={setQuery} />
          <Inputs setQuery={setQuery} setUnits={setUnits} />
        </div>

        <div
          className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-white-400 from-gray-400 to-gray-600 ${formatBackground()}`}
        >
          {weather && (
            <>
              <TimeAndLocation weather={weather} />
              <TempAndDetails weather={weather} units={units} />
              <Forecast title="3 hour step forecast" data={weather.hourly} />
              <Forecast title="Daily forecast" data={weather.daily} />
            </>
          )}
        </div>

        <ToastContainer
          autoClose={2500}
          hideProgressBar={true}
          theme="colored"
        />
      </section>
    </>
  );
};

export default App;
