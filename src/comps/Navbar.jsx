"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../public/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" h-20 w-full shadow-md bg-white">
      <div
        className={`flex h-full items-center justify-between px-4 ${
          isMenuOpen ? "delay-200 blur-sm" : "blur-0"
        }`}
      >
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
          <button className="py-3 px-6 rounded-md bg-secondary border hover:bg-primary hover:text-secondary ease-in duration-300">
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
          <button className="py-3 px-6 rounded-md border border-primary hover:text-primary hover:bg-secondary ease-in duration-300">
            Signup
          </button>
        </div>
        <div className="flex h-full items-center md:hidden">
          <button onClick={handleMenuClick}>
            <AiOutlineMenu size={30} className="text-primary" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`bg-secondary rounded-e-xl z-50 ease-in duration-300 p-5 fixed h-screen w-[65%] top-0
          ${isMenuOpen ? "left-0" : "left-[-100%]"}`}
      >
        <div className="flex justify-end">
          <button onClick={handleMenuClick}>
            <AiOutlineClose size={35} className="text-gray-700" />
          </button>
        </div>

        <div className="flex flex-col h-full w-full py-5">
          <Link href="#">
            <p className="py-4 text-primary hover:text-primary">Home</p>
          </Link>
          <Link href="#">
            <p className="py-4 hover:text-primary">Products</p>
          </Link>
          <Link href="#">
            <p className="py-4 hover:text-primary">About Us</p>
          </Link>
          <Link href="#">
            <p className="py-4 hover:text-primary">Blogs</p>
          </Link>
          <div className="flex flex-row flex-wrap text-center">
            <Link
              href="#"
              className="mr-2 my-2 py-3 px-6  rounded-md bg border border-black text-primary hover:bg-primary hover:text-secondary ease-in duration-300"
            >
              Login
            </Link>
            <Link
              href="#"
              className="mr-2 my-2 py-3 px-6  rounded-md border border-primary hover:text-primary hover:bg-secondary ease-in duration-300"
            >
              Signup
            </Link>
          </div>

          <div className="flex items-end h-full w-full">
            <Image
              src={Logo}
              width={150}
              height={50}
              alt="Creatvise"
              className="cursor-pointer user-select-none"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
