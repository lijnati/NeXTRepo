import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import Avatar from "../assets/technerd.png";
import { Button } from "@radix-ui/themes";
import { HiSearch, HiBell, HiChat } from "react-icons/hi";

const NavBar = () => {
  return (
    <div className="flex gap-3 md:gap-2 items-center p-6 ">
      <Link href="/">
        <Image
          src={logo}
          alt="Logo"
          height={50}
          width={50}
          className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
        />{" "}
      </Link>
      <button className="bg-black rounded-full p-2 px-2 text-white hidden md:block">
        Home
      </button>
      <button className="font-semibold p-2 px-4 rounded-full">Create</button>

      <div className="bg-[#e9e9e9] p-3  gap-3 items-center rounded-full w-full hidden md:flex">
        <HiSearch className="text-[25px] text-gray-500 "/>
        <input type="text" placeholder="search" className="outline-none bg-transparent" />
      </div>
        <HiBell className="text-[25px] md:text-[40px] text-gray-500 cursor-pointer"/>
        <HiChat className="text-[25px] md:text-[40px] text-gray-500 cursor-pointer"/>
        <Image
          src={Avatar}
          alt="profile avatar"
          className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
          width={50}
          height={50}
        />
    </div>
  );
};

export default NavBar;
