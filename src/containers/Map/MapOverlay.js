import React from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { numberWithSpaces } from "../../utilities/numberUtils";
import { useSelector } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
dayjs.extend(advancedFormat);

export default function MapOverlay({ results }) {
  const loading = useSelector((state) => state.apiStatus);

  const content =
    loading > 0 ? (
      <Spinner />
    ) : (
      <>
        <h1>{results.country}</h1>
        <div className="flex flex-col justify-around flex-1 space-y-2 font-body">
          <h4>New cases</h4>
          <p className="text-lg font-bold tracking-wider">
            {results.cases["new"]
              ? numberWithSpaces(results.cases["new"])
              : "No data available"}
          </p>
          <p className="text-sm text-gray-100">
            {dayjs(results.day).format("Do MMMM YYYY")}
          </p>
        </div>
      </>
    );

  return (
    <div className="absolute flex flex-col max-w-sm px-4 py-8 text-center text-white bg-gray-900 shadow-2xl cursor-default left-10 bottom-10 z-500 rounded-xl">
      {content}
    </div>
  );
}
