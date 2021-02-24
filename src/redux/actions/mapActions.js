import axios from "../../axios-reverse";
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

  return async function (dispatch) {
    const options = {
      params: {
        lat: lat,
        lon: lng,
        format: "json",
        "accept-language": "en",
        polygon_threshold: "0.0",
      },
    };

    dispatch({ type: types.BEGIN_API_CALL });
    const { data } = await axios.get("/reverse", options);
    let res = null;
    console.log(data);
    if (!data.error) {
      res = data.address.country;
      console.log(res);
    }
    // const country = "Poland";

    if (res) {
      //TODO Find a way to remove hard coded countries
      if (res === "United Kingdom") {
        res = "UK";
      }
      if (res === "United States of America") {
        res = "usa";
      }
      dispatch({
        type: types.LOAD_COUNTRY_SUCCESS,
        payload: res.toLowerCase(),
      });
      dispatch(fetchCountryHistory(res.toLowerCase()));
    } else {
      dispatch({ type: types.API_CALL_ERROR });
    }
  };
}
