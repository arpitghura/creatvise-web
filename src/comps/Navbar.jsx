"use client";

import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import Logo from "../../public/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

  return (
    <nav className="fixed h-20 w-full shadow-md bg-white">
      <div className="flex h-full items-center justify-between px-4">
        <Link href="/">
          <Image
            src={Logo}
            width={150}
            height={50}
            alt="Creatvise"
            className="cursor-pointer"
          />
        </Link>
        <div className="flex-row h-full items-center hidden md:flex">
          <Link href="#">
            <p className="px-4 text-primary">Home</p>
          </Link>
          <Link href="#">
            <p className="px-4 text-secondary hover:text-primary transition ease-in duration-200">
              Products
            </p>
          </Link>
          <Link href="#">
            <p className="px-4 text-secondary hover:text-primary transition ease-in duration-200">
              About Us
            </p>
          </Link>
          <Link href="#">
            <p className="px-4 text-secondary hover:text-primary transition ease-in duration-200">
              Blogs
            </p>
          </Link>
        </div>
        <div className="hidden md:flex flex-row items-center h-full">
          <button className="py-3 px-6 rounded-md bg-[#E0E0E3] border">
            Login
          </button>
          <div className="px-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
            >
              <circle cx="4.5" cy="4.5" r="4.5" fill="#5552B9" />
            </svg>
          </div>
          <button className="py-3 px-6 rounded-md border border-[#5552B9]">
            Signup
          </button>
        </div>
        <div className="flex h-full items-center md:hidden">
            <button onClick={handleMenuClick}>
            <HiOutlineMenuAlt3 size={50} className="text-primary"/>
            </button>
        </div>
      </div>
        
    </nav>
  );
};

export default Navbar;
