import React from "react";
import "./styles.css";

const CallToAction = () => {
  return (
    <div className="flex flex-col bg-svg w-full items-center h-screen p-10" id="cta">
      <div className="mt-10 md:w-[50%] sm:w-[80%] w-[90%] text-center">
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
