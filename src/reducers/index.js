import shows from "./showReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  shows,
});

export default rootReducer;
