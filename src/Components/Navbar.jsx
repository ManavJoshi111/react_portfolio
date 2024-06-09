import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeSection, setActivesection] = useState("#");
  const NavbarLinks = [
    {
      title: "Home",
      path: "#",
    },
    {
      title: "Experience",
      path: "#experience",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];

  const getActiveClass = (clickedHash) => setActivesection(clickedHash);

  return (
    <nav className="d-flex custom-navbar justify-content-center m-0 p-0 fixed-top p-2 border-bottom">
      <ul className="list-unstyled d-inline-flex inline-flex justify-content-center align-items-center m-0 p-0">
        {NavbarLinks.map((link, index) => (
          <li key={index} className="p-1 cursor-pointer">
            <a
              href={link.path}
              className={`text-decoration-none text-white ${
                activeSection === link.path ? "active" : ""
              }`}
              onClick={() => {
                getActiveClass(link.path);
              }}
            >
              {link.title}
            </a>
          </li>
        ))}
        <li className="p-1 cursor-pointer"></li>
      </ul>
    </nav>
  );
};

export default Navbar;
