import React from "react";
import "./about.css";
import img from "../Images/AboutImg.png";
import Card from "./Card";
import Footer from "./Footer";
import Path from "../Assets/Manav_Resume.pdf";
const About = () => {
  return (
    <>
      <div className="container-fluid mt-3 flex-wrap d-flex flex-column flex-md-row justify-content-center align-items-center">
        <div className="leftcontainer">
          <img src={img} id="imganim" className="img-fluid marginanim" alt="" />
        </div>
        <div className="rightcontainer">
          <h2 id="hey">Hey There...</h2>
          <center>
            <p id="intro">
              Myself Manav H Joshi. Currently, I am pursuing my B.Tech in Computer
              Engineering at Birla Vishvakarma Mahavidyalaya Engineering
              college, Vvnagar, Anand.
              <br />
              I was born and raised in Idar, Sabarkantha, Gujarat. I did my
              schooling from Shri K.M. Patel Vidyamandir, Idar.
              <br />
              I am an Enthusiastic tech geek having deep interest in web development and problem solving. I have done many projects in web development and have a good knowledge of HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, C, C++,Java, etc.
              <br /> I love to do various things like playing chess, listening
              to music, and reading novels. I have read many books starting from
              Durjoy Dutta, Chetan Bhagat to Mahabharata, and Bhagvadgeeta. I
              like to travel and explore more places.

              <br /> I am an introspecter who loves to be with himself the most.
            </p>
            <a
              type="button"
              href={Path}
              className="btn btn-outline-dark text-light"
              target="_href"
              downlaod="true"
            >
              Download CV
            </a>
          </center>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
