import React from "react";
import Card from "./Card";
const Experience = () => {
  return (
    <>
      <center>
        <h2 className="text-light">
          <u className="titleproj">Experience</u>
        </h2>
      </center>
      <br />
      <Card
        title="Full Stack Intern @SocialPilot Solutions LLP"
        description="Worked on frontend & backend both, improved UI for auth module pages as per the requirements, migrated queries to new database which resulted into ~60% of improvement"
        technologies="KoaJS, ReactJS, Redux, MongoDB"
        className="card"
      />
      <Card
        title="Web Development Intern @Internauts Infotech"
        description="Led the team in developing the project “digiScholar”, a scholarship portal using MERN Stack. Designed schema for
                the project and developed APIs for seamless CRUD operations. Successfully Integrated frontend and backend components of the project"
        technologies="MERN Stack, Git, GitHub, Bootstrap"
        className="card"
      />
      <Card
        title="Web Development Intern @Thinkbeat Solutions"
        description="Worked As Web Development Intern in a startup named Thinkbeat Solutions. Worked on technologies like React and Magento2"
        technologies="HTML CSS JS React Magento2 Servers"
        className="card"
      />
      <Card
        title="Lead - Google Developer Student Clubs BVM"
        description="I got selected as Google Developer Student Clubs Lead for our college for tenure 2022-23. I am leading the team of 11 members. We organise workshops, seminars and events on various technologies"
        className="card"
      />
    </>
  );
};

export default Experience;
