import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function trackerReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
      };

    case types.LOAD_HISTORY_SUCCESS:
      return {
        ...state,
        history: action.payload,
      };

    case types.LOAD_SELECTED_COUNTRIES:
      return {
        ...state,
        selectedCountries: action.payload,
      };

    case types.NO_CASES_FOUND:
      return {
        ...state,
        history: {},
      };

    default:
      return state;
  }
}

export default trackerReducer;
