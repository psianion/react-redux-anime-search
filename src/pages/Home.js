import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAnime } from "../actions/animeAction";
import Anime from "../components/Anime";
import AnimeDetail from "../components/AnimeDetail";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router";

const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const pathId = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(loadAnime());
  }, [dispatch]);

  const { popular, upcoming, ongoing, searched } = useSelector(
    (state) => state.anime
  );

  return (
    <>
      <AnimeLists>
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
            {pathId && <AnimeDetail pathId={pathId} />}
          </AnimatePresence>
          {searched.length ? (
            <>
              <h2>Searched Anime</h2>
              <AnimeList>
                {searched.map((anime) => (
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
            </>
          ) : (
            <>
              <h2>Upcoming Anime</h2>
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
              <h2>Ongoing Anime</h2>
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
              <h2>Popular Anime</h2>
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
            </>
          )}
        </AnimateSharedLayout>
      </AnimeLists>
    </>
  );
};

const AnimeLists = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 3rem 0rem;
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
