// NoData.js
import React from 'react';

export default function NoData() {
  return (
    <div className="flex flex-col items-center justify-center h-64 bg-gray-50 border border-gray-200 rounded-lg shadow-md p-6">
      <svg
        className="w-16 h-16 text-gray-400 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 14l-2-2m0 0l-2 2m2-2v6m0-6l2-2m-4 4h8m-8 0l-2 2m8-2v6m0-6l2-2m-2 2h8m-8 0l2 2"
        />
      </svg>
      <p className="text-gray-600 text-lg font-semibold">No Data Available</p>
      <p className="text-gray-500 text-sm mt-2">There is nothing to display right now.</p>
    </div>
  );
}
