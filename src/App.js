import React, { StrictMode, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import ThemeContext from "./ThemeContext.js";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  const theme = useState("blue");

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to={"/"}>
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Routes>
            <Route index element={<SearchParams />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
