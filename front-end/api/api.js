import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://spotify-clone-aqj4.onrender.com";

export function useFetchData() {
  const [artistArray, setArtistArray] = useState([]);
  const [songsArray, setSongsArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const responseArtists = await axios.get(`${API_URL}/artists`);
        const responseSongs = await axios.get(`${API_URL}/songs`);

        setArtistArray(responseArtists.data);
        setSongsArray(responseSongs.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchData();
  }, []);

  return { artistArray, songsArray };
}
