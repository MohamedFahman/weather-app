import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      setData(null);

      if (!navigator.onLine) {
        setError("No internet connection.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        if (err.response?.status === 401) {
          setError("Invalid or missing API key.");
        } else if (err.response?.status === 403) {
          setError("API usage limit reached.");
        } else {
          setError("Failed to fetch weather data.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
