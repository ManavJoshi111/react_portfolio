import React from "react";
import achievements from "../Data/achievements";

const Achievements = () => {
  return (
    <div className="container">
      <h2 className="mb-3 text-light text-center" id="projects">
        <u className="titleproj">Achievements</u>
      </h2>
      <ul className="list-group">
        {achievements.map((achievement, index) => (
          <li
            className="mb-0 pb-0 list-group-item d-flex align-items-start"
            key={index}
          >
            <span className="bullet-point me-2 text-lg">🎯</span>
            <span className="ml-2 text-lg">{achievement}</span>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
