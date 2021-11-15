const initState = {
  animeDetail: {},
  photos: { pictures: [] },
  isLoading: true,
};

const detailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        animeDetail: action.payload.detail,
        isLoading: false,
        photos: action.payload.photos,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default detailsReducer;
