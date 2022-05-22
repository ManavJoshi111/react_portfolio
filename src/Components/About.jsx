import React from "react";
import "./about.css";
import img from "../Images/AboutImg.png";
import Card from "./Card";
import Footer from "./Footer";
import Path from "../Assets/Manav_Resume.pdf";
import Fade from "react-reveal/Fade";

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
              Myself Manav Joshi. Currently, I am pursuing my B.Tech in Computer
              Engineering at Birla Vishvakarma Mahavidyalaya Engineering
              college, Vvnagar, Anand.
              <br />
              I was born and raised in Idar, Sabarkantha, Gujarat. I did my
              schooling from Shri K.M. Patel Vidyamandir, Idar.
              <br />
              Apart from my studies, I am currently working as a publicity team
              member in Vishvakarma Magazine. I am working as a core team member
              of GDSC ( Google Developer Student Clubs ) also.
              <br /> I love to do various things like playing chess, listening
              to music, and reading novels. I have read many books starting from
              Durjoy Dutta, Chetan Bhagat to Mahabharata, and Bhagvadgeeta. I
              like to travel and explore more places.
              <br /> I am an introspecter who loves to be with himself the most.
            </p>
            <a
              type="button"
              href={Path}
              className="btn btn-outline-dark"
              target="_href"
              downlaod="true"
            >
              Download CV
            </a>
          </center>
        </div>
      </div>
      <h2 className="titleproj">Projects - Made By Me</h2>
      <div className="container-fluid d-flex flex-column flex-md-row justify-content-center align-items-center mt-4">
        <Card
          title="Cronux - A Streaming Platform"
          link="https://github.com/ManavJoshi111/Cronux"
          desc="Cronux is a full-stack OTT Platform which provides Movies and TV
          Shows. This project was made in a group of two. Users can create their
          account and enjoy their prefereed shows."
          tech="HTMl CSS JS PHP MySql"
          className="card"
        />
        <Card
          title="Spotified - A Music Player Web App"
          link="https://manavjoshi111.github.io/Spotified/"
          desc="I made a basic web app that gives the same experience as the music app
          giants like Spotify, Ganna, etc. Users can navigate through the UI easily
          and enjoy their preferred music."
          tech="HTML CSS JS"
          className="card"
        />
        <Card
          title="WeCheck - A Weather App"
          link="https://github.com/ManavJoshi111/WeatherAppWithReact"
          desc="It is a simple web app that gives the minimum and maximum temperature
          of the city which you search.
          I used an open API to find the temperature"
          tech="React"
          className="card"
        />
      </div>
      <Footer />
    </>
  );
};

export default About;
