import axios from "../../axios";
import * as types from "./actionTypes";
import lookup from "country-code-lookup";

export function loadSelectedCountries(countries) {
  return {
    type: types.LOAD_SELECTED_COUNTRIES,
    payload: countries,
  };
}

export function loadSelectedCountry(country) {
  return {
    type: types.LOAD_SELECTED_COUNTRY,
    payload: country,
  };
}

// THUNKS
export function fetchCountries() {
  return async function (dispatch) {
    dispatch({ type: types.BEGIN_API_CALL });
    const response = await axios.get("/countries");

    const countries = response.data.response.map((country) => {
      const extraInfo = lookup.byCountry(country);
      return {
        name: country,
        iso2: extraInfo ? extraInfo.iso2.toLowerCase() : null,
      };
    });
    dispatch({ type: types.LOAD_COUNTRIES_SUCCESS, payload: countries });
  };
}

export function fetchHistory(country = "All", date = null) {
  return async function (dispatch) {
    const options = {
      params: { country: country, day: date },
    };

    if (country !== "All") {
      const countryObj = lookup.byCountry(country);
      dispatch({ type: types.LOAD_COUNTRY_CODE, payload: countryObj });
    }

    dispatch({ type: types.BEGIN_API_CALL });
    const { data } = await axios.get("/history", options);
    const relevantData = data.response.find((report) => report.cases.new);

    if (!relevantData) {
      dispatch({ type: types.NO_CASES_FOUND });
    } else {
      dispatch({ type: types.LOAD_HISTORY_SUCCESS, payload: relevantData });
    }
  };
}

export function fetchStatistics(country = "All", date = null) {
  return async function (dispatch) {
    // const options = {
    //   params: { country: country, day: date },
    // };

    // if (country !== "All") {
    //   const countryObj = lookup.byCountry(country);
    //   dispatch({ type: types.LOAD_COUNTRY_CODE, payload: countryObj });
    // }

    dispatch({ type: types.BEGIN_API_CALL });
    // const { data } = await axios.get("/statistics", options);
    const { data } = await axios.get("/statistics");
    const relevantData = data.response;

    if (!relevantData) {
      dispatch({ type: types.NO_CASES_FOUND });
    } else {
      dispatch({ type: types.LOAD_STATISTICS_SUCCESS, payload: relevantData });
    }
  };
}

export function fetchCountryHistory(country, date = null) {
  return async function (dispatch) {
    const options = {
      params: { country: country, day: date },
    };
    const countryObj = lookup.byCountry(country);
    dispatch({ type: types.LOAD_COUNTRY_CODE, payload: countryObj });

    dispatch({ type: types.BEGIN_API_CALL });
    const { data } = await axios.get("/history", options);
    console.log(options);
    const relevantData = data.response.find((report) => report.cases.new);

    if (!relevantData) {
      dispatch({ type: types.NO_CASES_FOUND });
    } else {
      dispatch({
        type: types.LOAD_COUNTRY_HISTORY_SUCCESS,
        payload: relevantData,
      });
    }
  };
}
