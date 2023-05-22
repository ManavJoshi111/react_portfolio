import React from "react";
import "./card.css";
const Card = (props) => {
  return (
    <>
      {props.title && <div className="card ">
        <div className="card-body">
          {props.title && <h5 className="card-title h3">{props.title}</h5>}
          {props.description && <p className="card-text">{props.description} </p>}
          {props.technologies && <p className="card-text">Technologies Used : {props.technologies} </p>}
          {props.code_url && <a
            href={props.code_url}
            className="card-live_url h5"
            target="_blank"
            rel="noreferrer"
          >
            See Code
          </a>}
          {props.live_url && <a
            href={props.live_url}
            className="card-live_url h5 float-end"
            target="_blank"
            rel="noreferrer"
          >
            See Live
          </a>}
        </div>
      </div>}
    </>
  );
};

export default Card;
