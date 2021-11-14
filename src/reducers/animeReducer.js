const initState = {
  popular: [],
  upcoming: [],
  ongoing: [],
};

const animeReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_ANIME":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        ongoing: action.payload.ongoing,
      };
    default:
      return { ...state };
  }
};

export default animeReducer;
