import React, { useState } from "react";
import { Lookup } from "react-rainbow-components";
import { useDispatch } from "react-redux";
import { loadSelectedCountry } from "../redux/actions/trackerActions";
import Flag from "./UI/Flag";

export default function CountryLookup({ minWidth, maxWidth, countries }) {
  const dispatch = useDispatch();

  const containerStyles = {
    minWidth: minWidth || 400,
    maxWidth: maxWidth || 700,
  };

  const listOfCountries = countries.map((country) => {
    return {
      label: country.name,
      icon: <Flag country={country} />,
    };
  });

  const [state, setState] = useState({ options: null });

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
    if (state.options && state.value && value.length > state.value.length) {
      setState({
        options: filter(value, state.options),
        value,
      });
    } else if (value) {
      setState({
        value,
      });
      setState({
        options: filter(value, listOfCountries),
        value,
      });
    } else {
      setState({
        options: null,
        value: "",
      });
    }
  }

  return (
    <Lookup
      id="lookup-1"
      placeholder="Pick a country..."
      variant="shaded"
      options={state.options}
      value={state.option}
      debounce
      onChange={(option) => {
        setState({ option });
        if (option) {
          dispatch(loadSelectedCountry(option.label));
        } else {
          dispatch(loadSelectedCountry(null));
        }
      }}
      onSearch={search}
      style={containerStyles}
      className="mb-8 rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
    />
  );
}
