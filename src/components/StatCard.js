import React from "react";
import { numberWithSpaces } from "../utilities/numberUtils";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

export default function StatCard({ title, number, date, description, color }) {
  const generateGradientBackground = (color) => {
    switch (color) {
      case "red":
        return "bg-gradient-to-br from-red-400 via-red-500 to-red-500";

      case "yellow":
        return "bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-500";

      case "green":
        return "bg-gradient-to-br from-green-400 via-green-500 to-green-500";

      case "gray":
        return "bg-gradient-to-br from-gray-400 via-gray-500 to-gray-500";

      default:
        return "bg-gradient-to-br from-red-400 via-red-500 to-red-500";
    }
  };

  return (
    <article
      className={`py-8 px-4 text-center text-white ${generateGradientBackground(
        color
      )} rounded-xl shadow-2xl max-w-xs flex flex-col cursor-default`}
    >
      <h4 className="mb-4 font-bold font-display">{title}</h4>
      <div className="flex flex-col justify-around flex-1 space-y-2 font-body">
        <p className="text-lg font-bold tracking-wider">
          {number ? numberWithSpaces(number) : "No data available"}
        </p>
        <p className="text-sm text-gray-100">
          {dayjs(date).format("Do MMMM YYYY")}
        </p>
        <p className="text-xs">{description}</p>
      </div>
    </article>
  );
}
