import Image from "next/image";
import React from "react";
import CreatviseZone from "../../public/Creatvise-zone.png";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Features = () => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between place-items-end"
      id="creatvise-zone"
    >
      <div className="p-10">
        <h2 className="font-semibold text-primary lg:text-5xl md:text-4xl text-3xl">
          Unleash your creativity in your curative zone !
        </h2>
        <p className="text-primary mt-5 font-light md:text-2xl sm:text-xl">
          Whether you're a creative enthusiast or a professional designer,
          Creatvise zone is the first browser based design tool that allows to
          create stunning graphics with more user friendly experience. It has
          the power of stitching your .psd (Photoshop) and .ai (Illustrator)
          files with intuitive features to meet all your design needs. This tool
          prioritizes user-friendliness and aims to provide a seamless and
          enjoyable design experience like never before.
        </p>
        <Link href="#">
          <p className="py-3 mt-5 text-primary font-medium md:text-xl">
            Explore Now
            <FaArrowRightLong className="inline-block ml-2 text-primary" />
          </p>
        </Link>
      </div>
      <div>
        <Image src={CreatviseZone} alt="Creatvise Zone" />
      </div>
    </div>
  );
};

export default Features;
