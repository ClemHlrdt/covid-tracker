import { combineReducers } from "redux";
import tracker from "./trackerReducer";
import apiStatus from "./apiStatusReducer";

export default combineReducers({
  tracker,
  apiStatus,
});
