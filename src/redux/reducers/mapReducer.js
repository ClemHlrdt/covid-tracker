import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function mapReducer(state = initialState.map, action) {
  switch (action.type) {
    case types.LOAD_POSITION:
      return {
        ...state,
        position: action.payload,
      };

    case types.LOAD_COUNTRY_SUCCESS:
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
}

export default mapReducer;
