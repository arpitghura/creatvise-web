"use client";
import React from "react";
const Newsletter = () => {
  const handleSubmission = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="relative md:w-[400px] w-full max-w-full bg-gray-50 rounded-full">
      <input
        type="email"
        id="email"
        placeholder="email"
        className="p-4 text-sm text-gray-900 bg-transparent outline-none"
        required
      />
      <button
        type="submit"
        className="text-white absolute top-0.5 right-0 border-2 border-gray-50 bg-primary outline-none 
              rounded-full text-sm px-4 py-2 h-[95%]"
        onClick={handleSubmission}
      >
        notify me
      </button>
    </div>
  );
};

export default Newsletter;
