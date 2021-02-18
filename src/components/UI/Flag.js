import React from "react";

export default function Flag({ country }) {
  return (
    <div className="mb-6">
      {country.iso2 ? (
        <img
          className="h-14"
          src={`https://flagcdn.com/${country.iso2}.svg`}
          alt={country.name}
        />
      ) : (
        <div className="text-5xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
