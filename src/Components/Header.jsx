import React from "react";
import Typed from "react-typed";
import "./header.css";
import About from "./About";
import Error from "./Error";
import Fade from "react-reveal/Fade";
import { Route, Routes, NavLink } from "react-router-dom";
import Particle from "./Particle";

const Header = () => {
  return (
    <>
      <Particle />
      <div className="header-wrapper">
        <Fade bottom>
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
                  "An Engineering Student",
                  "A Web Developer",
                  "A Competitive Coder",
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
        </Fade>
      </div>
      <Routes>
        <Route path="/" elemnent={<Error />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
};

export default Header;
