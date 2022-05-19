import React from "react";
import Typed from "react-typed";
import "./header.css";
import About from "./About";
import Error from "./Error";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <div className="main-info">
          <h1>
            Hello{" "}
            <img
              src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
              alt=""
              height="50px"
            />{" "}
            I'm Manav Joshi
          </h1>
          <p className="typed-text">
            I'm{" "}
            <Typed
              className="typed-text"
              strings={[
                "A Web Developer",
                "A Competitive Coder",
                "An Engineering Student",
              ]}
              typeSpeed={40}
              backSpeed={60}
              loop
            ></Typed>
          </p>
          <NavLink to="/about" className="btn btn-container btn-main-offer">
            Let's Get Started
          </NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" elemnent={<Error />}></Route>
      </Routes>
    </>
  );
};

export default Header;
