import React from "react";

const backdrop = ({ clicked, show }) =>
  show ? (
    <div
      className="fixed top-0 left-0 z-40 w-screen h-screen"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", margin: 0 }}
      onClick={clicked}
    ></div>
  ) : null;

export default backdrop;
