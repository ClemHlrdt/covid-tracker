import React from "react";
import svg from "./undraw_empty.svg";

export default function NoData() {
  return (
    <div className="px-16 pt-32 pb-16 text-center bg-white rounded-lg">
      <img src={svg} alt="No data logo" className="md:max-w-sm" />
      <h3 className="mt-8 font-bold text-gray-800 md:text-3xl ">
        No data found!
      </h3>
    </div>
  );
}
