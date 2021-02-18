import React from "react";
import svg from "./undraw_empty.svg";

export default function NoData() {
  return (
    <div className="p-8 text-center">
      <img src={svg} alt="No data logo" className="max-w-md" />
      <h3 className="mt-8 text-2xl text-gray-600 font-display">
        No data found!
      </h3>
    </div>
  );
}
