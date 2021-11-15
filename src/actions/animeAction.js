import axios from "axios";
import {
  popularAnimeURL,
  upcomingAnimeURL,
  ongoingAnimeURL,
  searchAnimeURL,
} from "../api";

export const loadAnime = () => async (dispatch) => {
  const popularData = await axios.get(popularAnimeURL());
  const upcomingData = await axios.get(upcomingAnimeURL());
  const ongoingData = await axios.get(ongoingAnimeURL());
  dispatch({
    type: "FETCH_ANIME",
    payload: {
      popular: popularData.data.top,
      upcoming: upcomingData.data.top,
      ongoing: ongoingData.data.top,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchAnimeURL(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
