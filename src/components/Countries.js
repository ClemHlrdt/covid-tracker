import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../redux/actions/trackerActions";
import Spinner from "./UI/Spinner/Spinner";
import Flags from "./UI/Flag";
import { Link } from "react-router-dom";
import CountryLookup from "./CountryLookup";

export default function Countries() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.tracker.countries);
  const selectedCountries = useSelector(
    (state) => state.tracker.selectedCountries
  );
  const loading = useSelector((state) => state.apiStatus);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const selectedNames = selectedCountries.options
    ? selectedCountries.options.map((country) => country.label)
    : [];

  const currentCountries = countries.filter((country) =>
    selectedNames.includes(country.name)
  );

  let content = (
    <div className="flex flex-wrap justify-center w-full space-x-7">
      {currentCountries.map((country) => (
        <Link key={country.name} to={`/stats/${country.name}`}>
          <div className="flex flex-col items-center flex-1 px-4 py-4 mb-8 border-2 rounded">
            <Flags country={country} />
            <h3>{country.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col items-center mt-24 text-center">
      <h1 className="max-w-sm p-4 mx-auto mt-5 mb-8 text-5xl font-light border-b-2 border-gray-700 font-display">
        Countries
      </h1>
      {loading < 0 || countries.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <CountryLookup countries={countries} />
          {content}
        </>
      )}
    </div>
  );
}
