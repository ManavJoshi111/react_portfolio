import React from "react";
import Typed from "react-typed";
import "./header.css";
import { Route, Routes, NavLink } from "react-router-dom";
import Particle from "./Particle";
const Header = () => {
  return (
    <>
      <Particle />
      <div className="header-wrapper">
        <div className="main-info">
          <h1 className="fw-bold">
            Hello  I'm Manav Joshi
            {/* <img
                src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
                alt=""
                height="50px"
              />{" "} */}
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
      </div>
    </>
  );
};

export default Header;
