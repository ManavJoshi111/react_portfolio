import React from "react";
import "./about.css";
import img from "../Images/AboutImg.png";
import Card from "./Card";

const About = () => {
  return (
    <>
      <div className="container-fluid mt-3 flex-wrap d-flex flex-column flex-md-row justify-content-center align-items-center">
        <div className="leftcontainer">
          <img src={img} id="imganim" className="img-fluid marginanim" alt="" />
        </div>
        <div className="rightcontainer">
          <center>
            <p>
              Hey There... Myself Manav Joshi. currently, I am pursuing my
              B.Tech in Computer Engineering at Birla Vishvakarma Mahavidyalaya
              Engineering college, Vvnagar, Anand. I was born and raised in
              Idar, Sabarkantha, Gujarat. I did my schooling from Shri K.M.
              Patel Vidyamandir, Idar, and secured 2nd rank in whole centre in
              HSC board examination. apart from my studies, I am currently
              working as a publicity team member in Vishvakarma Magazine which
              is the official publication hand of our college. I am working as a
              core team member of GDSC ( Google Developer Student Clubs ) also.
              I love to do many things like playing chess, listening to music,
              and reading novels as well. I have read many books starting from
              Durjoy Dutta, Chetan Bhagat to Mahabharata, and Bhagvadgeeta. I
              like to travel and explore more places. I like to be with myself
              the most.
            </p>
            <button type="button" className="btn btn-outline-dark">
              Let's Talk
            </button>
          </center>
        </div>
      </div>
      <center>
        <h2 className="titleproj">Projects Made By Me</h2>
      </center>
      <div className="container-fluid d-flex flex-column flex-md-row justify-content-center align-items-center">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default About;
