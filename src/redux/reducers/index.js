import { combineReducers } from "redux";

const reducers = ["user","file","auth"];

export default combineReducers(
  reducers.reduce((initial, name) => {
    initial[name] = require(`./${name}`).default;
    return initial;
  }, {})
);
