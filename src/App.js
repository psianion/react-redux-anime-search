import GlobalStyles from "./components/GlobalStyles";
import React, { useState } from "react";
import { Route } from "react-router-dom";
//Components/Pages
import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {
  const [searchedData, setSearchedData] = useState([]);
  const [pageNum, setPageNum] = useState(2);

  return (
    <div className="App">
      <GlobalStyles />
      <Nav setSearchedData={setSearchedData} setPageNum={setPageNum} />
      <Route path={["/game/:id", "/"]}>
        <Home
          searchedData={searchedData}
          setSearchedData={setSearchedData}
          setPageNum={setPageNum}
          pageNum={pageNum}
        />
      </Route>
    </div>
  );
}

export default App;
