import React from "react";

const spanstyle = {
  color: "orange",
  fontWeight: "bolder",
};

const footerstyle = {
  height: "70px",
};
const Footer = () => {
  return (
    <>
      <div className="position-relative">
        <div className="position-absolute mt-5 w-100">
          <footer
            className="bg-dark text-center text-white d-flex justify-content-center align-items-center"
            style={footerstyle}
          >
            <div className="text-center">
              Developed & Designed With 🧡 by{" "}
              <span style={spanstyle}>Manav Joshi</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
