import React from "react";

const size = {
  postition: "relative",
  width: "100%",
  height: "70px",
  bottom: "0",
};

const spanstyle = {
  color: "orange",
  fontWeight: "bolder",
};
const Footer = () => {
  return (
    <>
      <footer
        className="bg-dark text-center text-white d-flex justify-content-center align-items-center"
        style={size}
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
