import axios from "axios";

const instance = axios.create({
  baseURL: "https://covid-193.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "13fce7cbcdmshd7cc9ccc825427bp183e04jsnd419250d5f24",
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
});

export default instance;
