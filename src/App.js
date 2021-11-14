import "./App.css";
import React from "react";
//Components/Pages
import Home from "./pages/Home";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <Home />
    </div>
  );
}

export default App;
