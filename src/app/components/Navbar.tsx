"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaRegUser, FaRegHeart } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full md:flex justify-between items-center bg-[#FBEBB5] py-4 px-6 md:px-10 fixed top-0 z-50 shadow-md">
      {/* Logo */}
      <div>
        <Link href="/" className="text-2xl font-bold text-black">
          MyStore
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex list-none gap-6">
        {["Home", "Shop", "About", "Contact"].map((item) => (
          <li key={item} className="text-black text-base font-medium hover:text-[#000000ac] transition-colors">
            <Link href={`/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button onClick={toggleMenu} className="sm:hidden text-2xl">
        ☰
      </button>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-[75%] h-full bg-[#FBEBB5] shadow-lg flex flex-col gap-5 p-8 sm:hidden">
          <button onClick={toggleMenu} className="self-end text-2xl">
            ✕
          </button>
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="text-lg font-medium">
              {item}
            </Link>
          ))}
        </div>
      )}

      {/* Icons */}
      <div className="hidden sm:flex items-center gap-4">
        <span className="text-black text-xl cursor-pointer hover:text-[#000000ac] transition-transform transform hover:scale-110">
          <FaRegUser />
        </span>
        <span className="text-black text-xl cursor-pointer hover:text-[#000000ac] transition-transform transform hover:scale-110">
          <FiSearch />
        </span>
        <span className="text-black text-xl cursor-pointer hover:text-[#000000ac] transition-transform transform hover:scale-110">
          <FaRegHeart />
        </span>
        <span className="text-black text-xl cursor-pointer hover:text-[#000000ac] transition-transform transform hover:scale-110">
          <AiOutlineShoppingCart />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
