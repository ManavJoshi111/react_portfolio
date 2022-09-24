import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  return (
    <>
    <AnimatedCursor
      innerSize={13}
      outerSize={10}
      color='#ed3659'
      outerAlpha={0.8}
      innerScale={0.3}
      outerScale={9}
    />
      <Navbar />
    </>
  );
};

export default App;
