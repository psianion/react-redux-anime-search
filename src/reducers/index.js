import animeReducer from "./animeReducer";
import detailsReducer from "./detailsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  anime: animeReducer,
  detail: detailsReducer,
});

export default rootReducer;
