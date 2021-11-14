import GlobalStyles from "./components/GlobalStyles";
import React from "react";
//Components/Pages
import Home from "./pages/Home";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Search />
      <Home />
    </div>
  );
}

export default App;
