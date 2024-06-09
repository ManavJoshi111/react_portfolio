import React from "react";

const Header = () => {
  return (
    <div className="header-container mt-4 flex flex-col md:flex-row justify-center items-center px-2">
      <div className="about-me flex-1">
        <span>Hi, I am Manav!</span>
        <br />
        <br />
        Currently, I am pursuing my B.Tech in Computer Engineering at Birla
        Vishvakarma Mahavidyalaya Engineering College, Vvnagar, Anand. 🏫 I was
        born and raised in Idar, Sabarkantha, Gujarat. I completed my schooling
        at Shri K.M. Patel Vidyamandir, Idar.
        <br />
        <br />
        💻 I am an enthusiastic tech geek with a deep interest in web
        development and problem solving. I have worked on numerous web
        development projects and possess good knowledge of HTML, CSS,
        JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, C, C++, Java,
        and more.
        <br />
        <br />
        📚 Besides technology, I have various other interests such as playing
        chess ♟️, listening to music 🎵, and reading novels 📖. I have read
        books ranging from Durjoy Dutta and Chetan Bhagat to Mahabharata and
        Bhagvadgeeta. I also enjoy traveling ✈️ and exploring new places. 🧘‍♂️ I
        am an introspective individual who cherishes solitude.
        <br />
        <br />
        <button className="">React out</button>
      </div>
      <div className="about-me-graphic hidden md:flex flex-1 justify-center items-center">
        This will contain a graphic or something else
      </div>
    </div>
  );
};

export default Header;
