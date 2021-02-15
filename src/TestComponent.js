import React, { useEffect, useState } from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/history",
  params: { country: "france", day: "2021-02-14" },
  headers: {
    "x-rapidapi-key": "13fce7cbcdmshd7cc9ccc825427bp183e04jsnd419250d5f24",
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
};

export default function TestComponent() {
  const [cases, setCases] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.response[0]);
        setCases(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  let renderCases = loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <h1>France</h1>
      <p>
        Cases per 1M :{" "}
        {!loading ? cases.response[0].cases["1M_pop"] : "loading..."}
      </p>
      <p>Number of new cases: {cases.response[0].cases.new}</p>
    </>
  );

  return <div>{renderCases}</div>;
}
