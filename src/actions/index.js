export const SHOWS = "SHOWS";

export function shows(items) {
  const action = {
    type: SHOWS,
    items,
  };
  return action;
}
