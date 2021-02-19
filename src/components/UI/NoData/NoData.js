import React from "react";
import svg from "./undraw_empty.svg";

export default function NoData() {
  return (
    <div className="px-16 pt-32 pb-16 text-center bg-white rounded-lg">
      <img src={svg} alt="No data logo" className="max-w-md" />
      <h3 className="mt-8 text-3xl font-bold text-gray-800 ">No data found!</h3>
    </div>
  );
}
