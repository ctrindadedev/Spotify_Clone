// Fetch ou Axios
import axios from "axios";

const URL = "http://localhost:3001";

//Usando para consumir a informação que está no back-end
const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseArtists.data);
