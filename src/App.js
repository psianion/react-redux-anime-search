import "./App.css";
import Search from "./components/Search";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadAnime } from "./actions/animeAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAnime());
  }, []);

  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
