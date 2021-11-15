import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux and Routes
import { fetchSearch } from "../actions/animeAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = ({ setPageNum, setSearchedData }) => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    setPageNum(1);
    setSearchedData([]);
    dispatch(fetchSearch(textInput, 1));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <h1>Find Anime</h1>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 2rem;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    width: 40%;
    font-size: 2rem;
    padding: 0.5rem;
    border: none;
    border-radius: 0.2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  button {
    font-size: 1.5rem;
    border: none;
    border-radius: 0.2rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  h1 {
    font-size: 5rem;
    letter-spacing: 10px;
    font-family: "Bangers", sans-serif;
  }
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;
