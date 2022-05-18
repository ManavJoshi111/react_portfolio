import React from "react";
import Typed from "react-typed";
import "./header.css";

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
          <a href="" className="btn btn-container btn-main-offer">
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
