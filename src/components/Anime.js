import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailsAction";
import { Link } from "react-router-dom";
import { popup } from "../animations";

function Anime({ title, id, start_date, image, episodes }) {
  const stringPathId = "" + id;

  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledAnime
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/anime/${id}`}>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={image}
          alt={title}
        />
        <h3>{title}</h3>
        <p>{start_date}</p>
      </Link>
    </StyledAnime>
  );
}

const StyledAnime = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 1rem;
  padding-bottom: 2rem;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Anime;
