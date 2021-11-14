import animeReducer from "./animeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  anime: animeReducer,
});

export default rootReducer;
