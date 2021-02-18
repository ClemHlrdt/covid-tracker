import * as types from "../actions/actionTypes";

function actionTypeEndInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducer(state = 0, action) {
  if (action.type === types.BEGIN_API_CALL) {
    return state + 1;
  } else if (
    action.type === types.API_CALL_ERROR ||
    action.type === types.NO_CASES_FOUND ||
    actionTypeEndInSuccess(action.type)
  ) {
    return state - 1;
  }
  return state;
}