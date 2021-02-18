import React from "react";
import { Lookup } from "react-rainbow-components";
import { useDispatch, useSelector } from "react-redux";
import { loadSelectedCountries } from "../redux/actions/trackerActions";

export default function CountryLookup({ maxWidth }) {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.tracker.countries);
  const selectedCountries = useSelector(
    (state) => state.tracker.selectedCountries
  );

  const containerStyles = {
    maxWidth: maxWidth || 700,
  };

  const listOfCountries = countries.map((country) => {
    return { label: country.name };
  });

  function filter(query, options) {
    if (query) {
      return options.filter((item) => {
        const regex = new RegExp(query, "i");
        return regex.test(item.label);
      });
    }
    return [];
  }

  function search(value) {
    if (
      selectedCountries.options &&
      selectedCountries.value &&
      value.length > selectedCountries.value.length
    ) {
      dispatch(
        loadSelectedCountries({
          options: filter(value, selectedCountries.options),
          value,
        })
      );
    } else if (value) {
      dispatch(
        loadSelectedCountries({
          value,
        })
      );
      dispatch(
        loadSelectedCountries({
          options: filter(value, listOfCountries),
          value,
        })
      );
    } else {
      dispatch(
        loadSelectedCountries({
          options: null,
          value: "",
        })
      );
    }
  }

  return (
    <Lookup
      id="lookup-1"
      placeholder="Pick a country..."
      options={selectedCountries.options}
      value={selectedCountries.option}
      onChange={(options) =>
        dispatch(loadSelectedCountries({ options: [options], option: options }))
      }
      onSearch={search}
      style={containerStyles}
      className="mb-8 rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
    />
  );
}
