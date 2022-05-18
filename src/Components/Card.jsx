import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Cronux - An OTT PLatform</h5>
          <p className="card-text">
            Cronux is a full stack OTT website I made in which the users can
            create an account and log in themselves any time. Users can watch
            the movies and webseries according to their preference online
          </p>
          <p className="card-text">
            I have fetched the data using an API named TheMovieDB
            <br />
            Technologies Used : HTML, CSS, JavaScript, PHP, MySQL
          </p>
          <a href="#" className="card-link">
            See Project
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
