import React from "react";
import "./about.css";
import img from "../Images/AboutImg.png";
import Experience from "./Experience";
import Projects from "./Projects";
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
          <h2 id="hey">Hey There...👋</h2>
          <center>
            <p id="intro">
              🙋 My name is Manav H Joshi. Currently, I am pursuing my B.Tech in Computer Engineering at Birla Vishvakarma Mahavidyalaya Engineering College, Vvnagar, Anand.
              <br />
              🏫 I was born and raised in Idar, Sabarkantha, Gujarat. I completed my schooling at Shri K.M. Patel Vidyamandir, Idar.
              <br />
              💻 I am an enthusiastic tech geek with a deep interest in web development and problem solving. I have worked on numerous web development projects and possess good knowledge of HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, C, C++, Java, and more.
              <br />
              📚 Besides technology, I have various other interests such as playing chess ♟️, listening to music 🎵, and reading novels 📖. I have read books ranging from Durjoy Dutta and Chetan Bhagat to Mahabharata and Bhagvadgeeta. I also enjoy traveling ✈️ and exploring new places.
              <br />
              🧘‍♂️ I am an introspective individual who cherishes solitude.
            </p>
            <a
              type="button"
              href={Path}
              className="btn btn-main-offer"
              target="_href"
              downlaod="true"
            >
              Download CV
            </a>
          </center>
        </div>
      </div>
      <br /><br />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
};

export default About;
