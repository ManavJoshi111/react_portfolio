import React from "react";

const spanstyle = {
  color: "orange",
  fontWeight: "bolder",
};

const footerstyle = {
  marginTop: "29px",
  postition: "relative",
  width: "100%",
  height: "70px",
  bottom: "0 !important",
};
const Footer = () => {
  return (
    <>
      <div className="position-absolute"></div>
      <footer
        className="bg-dark text-center text-white d-flex justify-content-center align-items-center"
        style={footerstyle}
      >
        <div className="text-center">
          Developed & Designed With 🧡 by{" "}
          <span style={spanstyle}>Manav Joshi</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
