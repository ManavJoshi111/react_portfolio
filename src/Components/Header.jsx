import React from "react";
import "./header.css";
import img from "../Images/AboutImg.png";
import Experience from "./Experience";
import Projects from "./Projects";
import Path from "../Assets/Manav_Resume.pdf";
import Achievements from "./Achievements";

const About = () => {
  return (
    <>
      <div
        className="mt-1 container-fluid px-0 d-flex flex-column align-items-center custom-header"
        id="about"
      >
        <div className="d-flex flex-column flex-md-row-reverse justify-content-center align-items-center ">
          <div className="leftcontainer d-flex justify-content-center">
            <img
              src={img}
              id="imganim"
              className="img-fluid marginanim"
              alt="About Manav"
            />
          </div>
          <div className="rightcontainer">
            <h2 className="display-4 secondary">
              Hello, I am <span id="hey">Manav</span>!
            </h2>
            <center>
              <p className="lead" id="intro">
                🙋 Currently, I am pursuing my B.Tech in Computer Engineering at
                Birla Vishvakarma Mahavidyalaya Engineering College, Vvnagar,
                Anand.
                <br />
                🏫 I was born and raised in Idar, Sabarkantha, Gujarat. I
                completed my schooling at Shri K.M. Patel Vidyamandir, Idar.
                <br />
                💻 I am an enthusiastic tech geek with a deep interest in web
                development and problem solving. I have worked on numerous web
                development projects and possess good knowledge of HTML, CSS,
                JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, C, C++,
                Java, and more.
                <br />
                📚 Besides technology, I have various other interests such as
                playing chess ♟️, listening to music 🎵, and reading novels 📖.
                I have read books ranging from Durjoy Dutta and Chetan Bhagat to
                Mahabharata and Bhagvadgeeta. I also enjoy traveling ✈️ and
                exploring new places.
                <br />
                🧘‍♂️ I am an introspective individual who cherishes solitude.
              </p>
              <a
                type="button"
                href={Path}
                className="btn btn-primary mt-3"
                target="_blank"
                download="Manav_Resume"
              >
                See My Resume! 🚀
              </a>
            </center>
          </div>
        </div>
        <a className="scrolldown-wrapper mt-5" href="#experience">
          <div className="scrolldown">
            <svg height="30" width="10">
              <circle className="scrolldown-p1" cx="5" cy="15" r="2" />
              <circle className="scrolldown-p2" cx="5" cy="15" r="2" />
            </svg>
          </div>
        </a>
      </div>
      <br />
      <br />
      <Experience />
      <hr />
      <Projects />
      <hr />
      <Achievements />
      <hr />
    </>
  );
};

export default About;
