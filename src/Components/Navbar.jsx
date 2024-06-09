import React from "react";
import { HOST } from "../env";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="navbar-container px-8 [clip-path:polygon(0%_0%,100%_0%,90%_100%,10%_100%)]">
          <ul className="flex justify-center items-center p-1">
            <a href={`${HOST}/`} className="m-2 hover:cursor-pointer">
              Home
            </a>
            <a
              href={`${HOST}/#experience`}
              className="m-2 hover:cursor-pointer"
            >
              Experience
            </a>
            <a href={`${HOST}/#project`} className="m-2 hover:cursor-pointer">
              Project
            </a>
            <a href={`${HOST}/#about`} className="m-2 hover:cursor-pointer">
              About
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
