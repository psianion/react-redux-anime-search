import { SHOWS } from "../actions";

export default function shows(state = [], action) {
  switch (action.type) {
    case SHOWS:
      return action.items;
    default:
      return state;
  }
}
