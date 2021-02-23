import React from "react";
import { numberWithSpaces } from "../utilities/numberUtils";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

export default function StatCard({ title, number, date, description, color }) {
  // const bgGradient = `bg-gradient-to-br from-${color}-400 via-${color}-500 to-${color}-500`;

  return (
    <article
      className={`py-8 px-4 text-center text-white bg-red-500 rounded-xl shadow-2xl max-w-xs flex flex-col cursor-default`}
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
