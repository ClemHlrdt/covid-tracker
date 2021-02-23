import React from "react";
import svg from "./undraw_not-found.svg";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full bg-gray-800">
      <img src={svg} alt="page not found" className="md:max-w-md" />
      <h3 className="p-4 text-3xl font-bold text-white">Page not found!</h3>
    </div>
  );
}
