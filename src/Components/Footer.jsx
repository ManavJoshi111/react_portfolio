import React from "react";
const style = {
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "85px",
  background: "#222222",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "1.2rem",
};
const Footer = () => {
  return (
    <>
      <div className="text-warning" style={style}>
        <p className="">Created With 🧡 by Manav Joshi</p>
      </div>
    </>
  );
};

export default Footer;
