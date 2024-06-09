import React from "react";
import "./app.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MarginTop from "./components/MarginTop";
import Header from "./components/Header";
import Error from "./components/Error";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <MarginTop marginTop={80}>
          <Header />
        </MarginTop>
        <MarginTop>
          <Contact />
        </MarginTop>
        {/* <Routes>
          <Route
            exact
            path="/"
            element={
              <MarginTop>
                <About />
              </MarginTop>
            }
          />
          <Route
            path="/contact"
            element={
              <MarginTop>
                <Contact />
              </MarginTop>
            }
          />
          <Route
            path="*"
            element={
              <MarginTop>
                <Error />
              </MarginTop>
            }
          />
        </Routes> */}
      </Router>
    </>
  );
};

export default App;
