import Image from "next/image";
import React from "react";
import CreatviseZone from "../../public/Creatvise-zone.png";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Features = () => {
  return (
    <div className="flex flex-row justify-between items-center h-screen">
      <div className="w-[50%] p-10">
        <h2 className="font-semibold text-primary text-3xl">
          Unleash your creativity in your curative zone !
        </h2>
        <p className="text-primary mt-4 font-light">
          Whether you're a creative enthusiast or a professional designer,
          Creatvise zone is the first browser based design tool that allows to
          create stunning graphics with more user friendly experience. It has
          the power of stitching your .psd (Photoshop) and .ai (Illustrator)
          files with intuitive features to meet all your design needs. This tool
          prioritizes user-friendliness and aims to provide a seamless and
          enjoyable design experience like never before.
        </p>
        <Link href="#">
          <p className="py-3 text-primary font-medium">
            Explore Now
            <FaArrowRightLong className="inline-block ml-2 text-primary" />
          </p>
        </Link>
      </div>
      <div className="w-[50%]">
        <Image src={CreatviseZone} alt="Creatvise Zone" />
      </div>
    </div>
  );
};

export default Features;
