import React from "react";

import Backdrop from "../Backdrop/Backdrop";

function Modal({ show, modalClosed, children }) {
  return (
    <>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        // className={classes.Modal}
        className="fixed z-50 flex justify-center p-4 text-black transition-all bg-white rounded-lg shadow"
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Modal;
