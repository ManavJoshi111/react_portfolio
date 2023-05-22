import React from "react";
import { Link as Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Error from "./Error";
import Contact from "./Contact";

const Navbar = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-md m-1 rounded navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Manav Joshi</Link>
          <button className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/" acticeClassname="active">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" acticeClassname="active">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" acticeClassname="active">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
