import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function AnimeDetail({ pathId }) {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;

    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  const { animeDetail, photos, isLoading } = useSelector(
    (state) => state.detail
  );
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <BasicDetail>
              <Name>
                <h3>{animeDetail.title}</h3>
                <h3>{animeDetail.title_english}</h3>
                <h3>{animeDetail.mal_id}</h3>
              </Name>
              <div></div>
            </BasicDetail>
            <BaseImage>
              <motion.img
                src={animeDetail.image_url}
                alt="background"
                layoutId={`image ${pathId}`}
              />
            </BaseImage>
            <Synopsis>
              <p>{animeDetail.synopsis}</p>
            </Synopsis>
            <Gallery>
              {photos.map((photo) => (
                <img src={photo.small} key={photo.small} alt="anime" />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </>
  );
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background-color: white;
  position: absolute;
  left: 10%;
  color: black;
`;

const Name = styled(motion.div)``;
const BasicDetail = styled(motion.div)``;
const BaseImage = styled(motion.div)``;
const Synopsis = styled(motion.div)``;
const Gallery = styled(motion.div)``;

export default AnimeDetail;
