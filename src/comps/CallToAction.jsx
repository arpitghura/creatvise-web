import React from "react";
import "./styles.css";

const CallToAction = () => {
  return (
    <div className="flex flex-col w-full items-center bg-svg h-screen p-10">
      <div className="mt-10 w-[50%] text-center">
        <h2 className="font-bold text-primary text-5xl">
          Get the freedom <br /> to be more creative!
        </h2>
        <p className="text-primary mt-10 font-light">
          Let your imagination soar in the magical world where creativity knows
          no bounds, where knowledge and expertise intertwine to create
          something truly extraordinary, fostering brilliance and enabling new
          ideas to flourish.
        </p>
      </div>
      <button className="bg-primary rounded-3xl px-5 py-2 mt-10 cursor-pointer text-white">
        Get Started
      </button>
    </div>
  );
};

export default CallToAction;
