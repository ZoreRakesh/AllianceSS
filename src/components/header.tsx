"use client";


import React, { useState,useEffect,useRef } from "react";
import Image from "next/image";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header fixed top-0 left-0 h-[75px] w-full md:px-3 p-2 z-50 bg-white shadow-md">
      
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <Image src="/ALLIANCE-LOGO1.png" alt="alternatetext" width={100} height={100} />
            <p className="font-bold text-xs  md:text-lg  lg:text-xl">ALLIANCE SUBSEA SOLUTION PVT. LTD.</p>
          </div>
          <div className="lg:hidden">
            <button
              className="text-blue-500 hover:text-blue-600"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <ul
          ref={menuRef}
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute top-16 right-10 bg-[rgb(12,16,22)] bg-opacity-50 p-4 lg:flex list-none m-0 lg:p-0 lg:static lg:space-x-4`}
          >
            <li className="block hover:text-blue-300 lg:inline-block mb-2 md:mb-0 ">
              <a href="#Home" onClick={()=>{
                setMenuOpen(!menuOpen)
              }}>Home</a>
            </li>
            <li className="block hover:text-blue-300 lg:inline-block mb-2 md:mb-0">
              <a href="#Services" onClick={()=>{
                setMenuOpen(!menuOpen)
              }}>Services</a>
            </li>
            <li className="block hover:text-blue-300 lg:inline-block mb-2 md:mb-0">
              <a href="#Certificates" onClick={()=>{
                setMenuOpen(!menuOpen)
              }}>Certificates</a>
            </li>
            <li className="block hover:text-blue-300 lg:inline-block">
              <a href="#Contactus" onClick={()=>{
                setMenuOpen(!menuOpen)
              }}>ContactUs</a>
            </li>
          </ul>
        </div>

    </header>
  );
};

export default Header;

