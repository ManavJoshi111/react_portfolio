import React from "react";
import "./card.css";
const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title h3">{props.title}</h5>
          <p className="card-text">{props.desc} </p>
          <p className="card-text">Technologies Used : {props.tech} </p>
          <a
            href={props.link}
            className="card-link h5"
            target="_blank"
            rel="noreferrer"
          >
            See Project
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
