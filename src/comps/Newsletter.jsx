"use client";
import React from "react";
const Newsletter = ({buttonText}) => {
  const handleSubmission = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="flex flex-col items-start justify-center">
      <form method="POST">
        <div className="relative w-full">
          <input
            type="email"
            placeholder="email"
            className="rounded-full px-4 py-2 text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-purple-200 focus:outline-none"
          />
          <button className="absolute right-0.5 top-0.5 px-3 py-2 text-sm font-semibold text-white bg-primary rounded-full lowercase" onClick={handleSubmission}>
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
