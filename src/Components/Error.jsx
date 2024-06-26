import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import "./error.css";
import Error_Pic from "../Images/404_Page.png";
const Error = () => {
  return (
    <>
      <div className="container-fluid d-flex flex-column flex-md-row justify-content-center align-items-center">
        <div className="leftcontainer">
          <img src={Error_Pic} alt="" className="img-fluid mt-3" />
        </div>
        <div className="rightcontainer ">
          <center>
            <h1 className="error">404</h1>
            <h2 className="h2">Oh...! You're Lost.</h2>
            <p className="">
              The page you are looking for doesn't exist.Please click the button
              below to go to the home page.
            </p>
            <NavLink to="/" className="btn btn-container">
              Go To HomePage
            </NavLink>
          </center>
        </div>
      </div>
    </>
  );
};

export default Error;
