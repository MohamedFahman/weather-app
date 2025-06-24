import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [city, setCity] = useState("Colombo");
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) setCity(input.trim());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">
        Live Weather Update
      </h1>

      <SearchBar
        input={input}
        onInputChange={setInput}
        onSearch={handleSearch}
      />

      <WeatherCard city={city} />
    </div>
  );
}

export default App;
