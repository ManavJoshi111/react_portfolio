import React from "react";
import "./card.css";
const Card = (props) => {
  return (
    <>
      {props.title && <div className="card ">
        <div className="card-body">
          {props.title && <h5 className="card-title h3">{props.title}</h5>}
          {props.desc && <p className="card-text">{props.desc} </p>}
          {props.tech && <p className="card-text">Technologies Used : {props.tech} </p>}
          {props.link && <a
            href={props.link}
            className="card-link h5"
            target="_blank"
            rel="noreferrer"
          >
            See Project
          </a>}
          {props.github && <a
            href={props.github}
            className="card-link h5 float-end"
            target="_blank"
            rel="noreferrer"
          >
            See Code
          </a>}
        </div>
      </div>}
    </>
  );
};

export default Card;
