import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="navbar-container bg-paragraph [clip-path:polygon(0%_0%,100%_0%,83%_100%,17%_100%)]">
          <ul className="flex justify-center items-center p-2">
            <li className="p-2">Home</li>
            <li className="p-2">Experience</li>
            <li className="p-2">Project</li>
            <li className="p-2">About</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
