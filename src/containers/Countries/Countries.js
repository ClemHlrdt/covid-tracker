import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCountries,
  fetchCountryHistory,
} from "../../redux/actions/trackerActions";
import CountryLookup from "../../components/CountryLookup";
import StatList from "../../components/StatList";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";

export default function Countries() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.tracker.countries);
  const countryHistory = useSelector((state) => state.tracker.countryHistory);
  const loading = useSelector((state) => state.apiStatus);
  const country = useSelector((state) => state.tracker.country);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCountryHistory(country));
  }, [country, dispatch]);

  let countryList = null;

  if (countryHistory.cases) {
    countryList = (
      <div className="my-10 space-y-6">
        <StatList loading={loading} history={countryHistory} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center mt-12 text-center">
      <h1 className="max-w-sm p-4 mx-auto mt-5 mb-8 text-5xl font-light border-b-2 border-gray-700 font-display">
        Countries
      </h1>
      {loading < 0 || countries.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <CountryLookup countries={countries} />
          {countryList}
        </>
      )}
    </div>
  );
}
