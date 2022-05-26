import React, { StrictMode, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import ThemeContext from "./ThemeContext.js";
import SearchParams from "./SearchParams";
import Details from "./Details";

import "./style.css";

const App = () => {
  const theme = useState("blue");

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <div
            className="p-0 m-0"
            style={{
              background:
                "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
            }}
          >
            <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
              <Link
                to={"/"}
                className="text-6xl hover:text-gray-200 text-white"
              >
                Adopt Me!
              </Link>
            </header>
            <Routes>
              <Route index element={<SearchParams />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
