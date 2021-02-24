import { combineReducers } from "redux";
import tracker from "./trackerReducer";
import apiStatus from "./apiStatusReducer";
import map from "./mapReducer";

export default combineReducers({
  tracker,
  apiStatus,
  map,
});
