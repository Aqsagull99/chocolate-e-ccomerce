"use client";

import Link from "next/link";
import { useState } from "react";
import {  FaUser,  } from "react-icons/fa";

const Header: React.FC = () => {
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState<boolean>(false);

  const toggleShopDropdown = (): void =>
    setIsShopDropdownOpen(!isShopDropdownOpen);

  return (
    <nav className="bg-gradient-to-br from-[#321E17] to-[#AE7822] w-full z-50 ">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center flex-wrap">
        {/* Logo Section */}
        <div className="flex items-center">
          <span className="ml-2 font-bold text-xl sm:text-2xl md:text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#B39B6E] to-[#8B6C42]">
            LuxeChoco
          </span>
        </div>

        {/* Navbar Links */}
        <div className="flex items-center space-x-6 sm:space-x-10">
          {/* Home Link */}
          <Link href="/" className="text-[#FFF5E1] hover:text-[#D4AF37] font-medium">
            Home
          </Link>

          

          {/* Shop Link with Dropdown */}
          <div className="relative">
            <button
              onClick={toggleShopDropdown}
              className="text-[#FFF5E1] hover:text-[#D4AF37] flex items-center"
            >
              Shop
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isShopDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 sm:w-52 bg-[#D4AF37]/30 backdrop-blur-md shadow-lg rounded-lg z-[100]">
                <a
                  href="#Heart1"
                  className="block px-4 py-2 text-xs sm:text-sm text-[#FFF5E1] hover:text-[#f8d35a] font-serif font-bold"
                >
                   Just For You Heart
                </a>
                <a
                  href="#skincare"
                  className="block px-4 py-2 text-xs sm:text-sm text-[#FFF5E1] hover:text-[#f8d35a] font-bold font-serif"
                >
                  Pralines Box
                </a>
               
                <a
                  href="#skincare"
                  className="block px-4 py-2 text-xs sm:text-sm text-[#FFF5E1] hover:text-[#f8d35a] font-bold font-serif"
                >
                  Orange Truffles
                </a>
                
                <a
                  href="#skincare"
                  className="block px-4 py-2 text-xs sm:text-sm text-[#FFF5E1] hover:text-[#f8d35a] font-bold font-serif"
                >
                  Chocolate Bear
                </a>
                <a
                  href="#skincare"
                  className="block px-4 py-2 text-xs sm:text-sm text-[#FFF5E1] hover:text-[#f8d35a] font-bold font-serif"
                >
                  Added Sugar Bar
                </a>
                <a
                  href="#skincare"
                  className="block px-4 py-2 text-xs sm:text-sm text-[#FFF5E1] hover:text-[#f8d35a] font-bold font-serif"
                >
                  Strawberry Cheesecake
                </a>
                <a
                  href="#skincare"
                  className="block px-4 py-2 text-xs sm:text-sm text-[#FFF5E1] hover:text-[#f8d35a] font-bold font-serif"
                >
                  Heart Milk Truffle
                </a>
                <a
                  href="#skincare"
                  className="block px-4 py-2 text-xs sm:text-sm text-[#FFF5E1] hover:text-[#f8d35a] font-bold font-serif"
                >
                  Selection Box
                </a>
                <a
                  href="#skincare"
                  className="block px-4 py-2 text-xs sm:text-sm text-[#FFF5E1] hover:text-[#f8d35a] font-bold font-serif"
                >
                  Swiss Luxury
                </a>
                <a
                  href="#skincare"
                  className="block px-4 py-2 text-xs sm:text-sm text-[#FFF5E1] hover:text-[#f8d35a] font-bold font-serif"
                >
                  Milk Truffles
                </a>
                <a
                  href="#skincare"
                  className="block px-4 py-2 text-xs sm:text-sm text-[#FFF5E1] hover:text-[#f8d35a] font-bold font-serif"
                >
                  Girl OR Boy Mixed
                </a>
               



              </div>
            )}
          </div>

          
         <Link
            href="/product"
            className="text-[#FFF5E1] hover:text-[#D4AF37] font-medium"
          >
            Products
          </Link>

          {/* Profile Icon */}
          <div className="bg-gradient-to-r from-[#D4AF37] via-[#B39B6E] to-[#8B6C42] p-1 rounded-full">
            <FaUser className="text-[#FFF5E1] cursor-pointer w-3 h-3" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

















