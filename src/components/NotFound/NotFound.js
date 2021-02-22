import React from "react";
import svg from "./undraw_not-found.svg";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center h-full">
      <h3 className="mt-8 mb-8 text-3xl font-bold text-gray-800">
        Page not found!
      </h3>
      <img src={svg} alt="page not found" className="max-w-md p-10" />
    </div>
  );
}
