// components/Sidebar.js
'use client'
import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="flex ">
        {/* Toggle Button */}
        <button
            onClick={toggleSidebar}
            className={`w-32 h-12 text-xl font-semibold bg-gray-600 hover:bg-gray-400 text-white fixed top-4 z-50 transition-all duration-500 ease-in-out ${
                isOpen ? "left-60" : "left-4"
            } rounded-lg`}
        >
            {isOpen ? "Close" : "Menu"}
        </button>

  
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-96 bg-gray-800 text-white shadow-lg transform transition-transform duration-500 ease-in-out z-40 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}   
        >
          <div className="mt-3 ml-1 p-4 text-2xl">Michael&apos;s Website</div>
          <nav className="flex flex-col p-4 space-y-2">
            <Link href="/" className="p-5 hover:bg-gray-700 duration-300 ease-in-out rounded text-xl">
              Home
            </Link>
            <Link href="/Work" className="p-5 hover:bg-gray-700 duration-300 ease-in-out rounded text-xl">
              Work and Resume
            </Link>
            <Link href="/Projects" className="p-5 hover:bg-gray-700 duration-300 ease-in-out rounded text-xl">
              Projects
            </Link>
            <Link href="/Recipes" className="p-5 hover:bg-gray-700 duration-300 ease-in-out rounded text-xl">
              Recipes
            </Link>
          </nav>
        </div>
      </div>
    );
  };