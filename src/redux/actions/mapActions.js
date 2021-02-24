import axios from "axios";
import * as types from "./actionTypes";
import { fetchCountryHistory } from "./trackerActions";

export function loadPosition(pos) {
  return {
    type: types.LOAD_POSITION,
    payload: pos,
  };
}

export function fetchCountry(position) {
  const { lat, lng } = position;
  const query = `${lat},${lng}`;

  return async function (dispatch) {
    const options = {
      params: { access_key: "9c4359f5805525692b78b998e4c3ced1", query: query },
    };

    dispatch({ type: types.BEGIN_API_CALL });
    const { data } = await axios.get(
      "http://api.positionstack.com/v1/reverse",
      options
    );
    let res = null;
    if (data.data.find((res) => res.country)) {
      res = data.data.find((res) => res.country);
    }

    // const country = "Poland";

    if (res) {
      //TODO Find a way to remove hard coded countries
      if (res.country === "United Kingdom") {
        res.country = "UK";
      }
      if (res.country === "United States") {
        res.country = "usa";
      }
      dispatch({
        type: types.LOAD_COUNTRY_SUCCESS,
        payload: res.country.toLowerCase(),
      });
      dispatch(fetchCountryHistory(res.country.toLowerCase()));
    } else {
      dispatch({ type: types.API_CALL_ERROR });
    }
  };
}
