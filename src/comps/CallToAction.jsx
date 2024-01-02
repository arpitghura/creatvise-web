import React from "react";
import "./styles.css";

const CallToAction = () => {
  return (
    <div
      className="flex flex-col bg-cta w-full items-center px-10 pb-24 my-10"
      id="cta"
    >
      <div className="mt-10 xl:w-[70%] lg:w-[80%] w-[90%] text-center">
        <h2 className="font-bold text-primary lg:text-5xl md:text-4xl text-3xl">
          Get the freedom <br /> to be more creative!
        </h2>
        <p className="text-[#6360b4] mt-10 font-light md:text-2xl sm:text-xl">
          Let your imagination soar in the magical world where creativity knows
          no bounds, where knowledge and expertise intertwine to create
          something truly extraordinary, fostering brilliance and enabling new
          ideas to flourish.
        </p>
        <button className="bg-primary rounded-full px-5 py-2 mt-10 cursor-pointer text-white md:text-xl xl:px-10 xl:py-5">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
