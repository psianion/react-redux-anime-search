import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAnime } from "../actions/animeAction";
import Anime from "../components/Anime";
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAnime());
  }, [dispatch]);

  const { popular, upcoming, ongoing } = useSelector((state) => state.anime);

  return (
    <AnimeLists>
      <h1>Upcoming Anime</h1>
      <AnimeList>
        {upcoming.slice(0, 8).map((anime) => (
          <Anime
            title={anime.title}
            id={anime.mal_id}
            key={anime.mal_id}
            image={anime.image_url}
            start_date={anime.start_date}
            episodes={anime.episodes}
          />
        ))}
      </AnimeList>
      <h1>Ongoing Anime</h1>
      <AnimeList>
        {ongoing.slice(0, 8).map((anime) => (
          <Anime
            title={anime.title}
            id={anime.mal_id}
            key={anime.mal_id}
            image={anime.image_url}
            start_date={anime.start_date}
            episodes={anime.episodes}
          />
        ))}
      </AnimeList>
      <h1>Popular Anime</h1>
      <AnimeList>
        {popular.slice(0, 8).map((anime) => (
          <Anime
            title={anime.title}
            id={anime.mal_id}
            key={anime.mal_id}
            image={anime.image_url}
            start_date={anime.start_date}
            episodes={anime.episodes}
          />
        ))}
      </AnimeList>
    </AnimeLists>
  );
};

const AnimeLists = styled(motion.div)`
  padding: 0rem 5rem;
  h1 {
    padding: 1rem 0rem;
  }
`;

const AnimeList = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 3rem;
`;

export default Home;
