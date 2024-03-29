import React from "react";
import "./styles.css";

const Hero = () => {
  return (
    <div
      className="flex flex-col w-full items-center bg-hero h-full md:justify-center justify-start p-10 text-white"
      id="hero"
    >
      <div className="pt-16 xl:w-[75%] lg:w-[85%] w-[90%] text-center">
        <h2 className="font-bold lg:text-6xl md:text-5xl text-4xl">
          Empowering Curators, Enriching Perspectives
        </h2>
        <p className="mt-10 lg:text-2xl md:text-xl text-lg font-light xl:mt-16 text-primary">
          Welcome to Creatvise! Unleashing the power of curation. We empower
          curators worldwide, providing them with a robust platform to showcase
          their expertise and amplify their impact. We believe in the power of
          curation and helps in turning a perspective into reality.
        </p>
      </div>
      <button title="get-started" aria-label="Get Started" className="bg-primary rounded-full px-5 py-2 mt-10 cursor-pointer text-white xl:px-10 xl:py-5 xl:mt-20 md:text-xl select-none">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
