"use client"
import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import Menu from "./Menu";
import Sidebar from "../sidebar/"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full h-20 bg-[#EDEDCB] md:bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path fill="#000" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
              </svg>
            </button>
            <Menu />
            <div className="hidden md:block">
              <Button />
            </div>
          </div>
        </div>
      </div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Navbar;
