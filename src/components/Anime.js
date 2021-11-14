import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Anime({ title, id, start_date, image, episodes }) {
  return (
    <StyledAnime>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{start_date}</p>
    </StyledAnime>
  );
}

const StyledAnime = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  padding-bottom: 2rem;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
`;

export default Anime;
