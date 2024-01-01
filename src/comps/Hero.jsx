import React from "react";
import "./styles.css";

const Hero = () => {
  return (
    <div className="flex flex-col w-full items-center bg-hero h-screen p-10 text-white">
      <div className="mt-16 lg:w-[70%] w-[90%] text-center">
        <h2 className="font-bold  md:text-6xl sm:text-4xl text-2xl">
          Empowering Curators, Enriching Perspectives
        </h2>
        <p className="mt-10 font-light">
          Welcome to Creatvise! Unleashing the power of curation. We empower
          curators worldwide, providing them with a robust platform to showcase
          their expertise and amplify their impact. We believe in the power of
          curation and helps in turning a perspective into reality.
        </p>
      </div>
      <button className="bg-primary rounded-3xl px-5 py-2 mt-10 cursor-pointer text-white">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
