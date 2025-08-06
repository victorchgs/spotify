import axios from "axios";

const URL = "http://localhost:3001/api";
// const URL = "https://spotify-nqfn.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
