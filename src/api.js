//Base URL
const base_url = "https://api.jikan.moe/v3/";

const popular_anime = `top/anime/1`;
const upcoming_anime = `top/anime/1/upcoming`;
const ongoing_anime = `top/anime/1/airing`;

export const popularAnimeURL = () => `${base_url}${popular_anime}`;
export const upcomingAnimeURL = () => `${base_url}${upcoming_anime}`;
export const ongoingAnimeURL = () => `${base_url}${ongoing_anime}`;

export const animeDetailsURL = (mal_id) => `${base_url}anime/${mal_id}`;
export const animePhotosURL = (mal_id) => `${base_url}anime/${mal_id}/pictures`;

export const searchAnimeURL = (name) =>
  `${base_url}search/anime?q=${name}&page=1&limit=16`;
