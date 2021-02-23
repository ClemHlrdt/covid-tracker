import React from "react";
import { useDispatch } from "react-redux";
import { loadSelectedCountry } from "../redux/actions/trackerActions";
import Select from "react-select";

export default function CountryLookup({ countries }) {
  const dispatch = useDispatch();

  const listOfCountries = countries.map((country) => {
    return {
      value: country.name,
      label: country.name,
    };
  });

  return (
    <div style={{ width: 200 }}>
      <Select
        options={listOfCountries}
        onChange={(e) => dispatch(loadSelectedCountry(e.value))}
      />
    </div>
  );
}
