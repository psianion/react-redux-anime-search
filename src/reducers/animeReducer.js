const initState = {
  popular: [],
  upcoming: [],
  ongoing: [],
  searched: [],
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
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};

export default animeReducer;
