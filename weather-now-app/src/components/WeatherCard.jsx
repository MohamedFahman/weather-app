import useFetch from "../hooks/useFetch";
import LoadingSpinner from "./LoadingSpinner";
import WeatherStat from "./WeatherStat";

export default function WeatherCard({ city }) {
  const API_KEY = import.meta.env.VITE_WEATHERAPI_KEY;
  const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

  const { data, loading, error } = useFetch(URL);

  if (loading)
    return (
      <div className="text-blue-600 text-center mt-10">
        <LoadingSpinner />
        <p>Loading weather data...</p>
      </div>
    );
  if (error)
    return <div className="text-red-600 text-center mt-10">Error: {error}</div>;
  if (!data || !data.current || !data.location)
    return (
      <div className="text-center text-gray-500 mt-10">
        No weather data available
      </div>
    );

  const {
    temp_c,
    humidity,
    wind_kph,
    uv,
    condition: { icon, text },
  } = data.current;
  const { name, country, localtime } = data.location;

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4 py-10">
      <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-8 transition-transform transform hover:scale-105 duration-300">
        <div className="flex flex-col items-center text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-blue-700">
            {name}, {country}
          </h2>
          <p className="text-gray-500 text-sm">{localtime}</p>
          <img src={`https:${icon}`} alt={text} className="w-20 h-20 mt-4" />
          <p className="text-lg font-medium text-gray-700">{text}</p>

          <div className="grid grid-cols-2 gap-4 mt-6 w-full">
            <WeatherStat label="🌡 Temp" value={`${temp_c}°C`} />
            <WeatherStat label="💧 Humidity" value={`${humidity}%`} />
            <WeatherStat label="🌬 Wind" value={`${wind_kph} kph`} />
            <WeatherStat label="☀️ UV Index" value={uv} />
          </div>
        </div>
      </div>
    </div>
  );
}
