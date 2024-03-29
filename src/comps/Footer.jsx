import React from "react";
import Image from "next/image";
import Logo from "../../public/logo-white.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaPinterestP,
} from "react-icons/fa6";
import Newsletter from "./Newsletter";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary text-white w-full p-10">
      <div className="flex w-full items-center flex-col">
        <Image
          src={Logo}
          width={150}
          height={50}
          alt="Creatvise"
          className="cursor-pointer"
          priority
        />
        <p className="pt-2 font-light">
          Empowering Curators, Enriching Perspectives
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-10 px-3 items-center">
        <Newsletter buttonText={"notify me"} />
        <div className="flex flex-row md:justify-evenly justify-start mt-8 md:mt-auto">
          <Link href="#">
            <FaInstagram size={20} className="mr-3" />
          </Link>
          <Link href="#">
            <FaFacebookF size={20} className="mr-3" />
          </Link>
          <Link href="#">
            <FaLinkedinIn size={20} className="mr-3" />
          </Link>
          <Link href="#">
            <FaPinterestP size={20} className="mr-3"/>
          </Link>
          <Link href="#">
            <FaXTwitter size={20} className="mr-3" />
          </Link>
        </div>
        <div className="mt-8 md:mt-auto">
          <p className="text-sm">&copy; 2023 Creatvise, All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
