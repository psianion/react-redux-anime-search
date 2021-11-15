import axios from "axios";
import { animeDetailsURL, animePhotosURL } from "../api";

export const loadDetail = (mal_id) => async (dispatch) => {
  dispatch({ type: "LOADING_DETAIL" });
  const animeData = await axios.get(animeDetailsURL(mal_id));
  const photosData = await axios.get(animePhotosURL(mal_id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      detail: animeData.data,
      photos: photosData.data.pictures,
    },
  });
};
