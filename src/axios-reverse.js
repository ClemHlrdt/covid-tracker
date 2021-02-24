import axios from "axios";

const instance = axios.create({
  baseURL: "https://forward-reverse-geocoding.p.rapidapi.com/v1/",
  headers: {
    "x-rapidapi-key": "13fce7cbcdmshd7cc9ccc825427bp183e04jsnd419250d5f24",
    "x-rapidapi-host": "forward-reverse-geocoding.p.rapidapi.com",
  },
});

export default instance;
