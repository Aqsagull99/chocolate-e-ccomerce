"use client";

import React from "react";
import { FaFacebook, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" text-[#FFF5E1] py-10 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <FaHeart className="mr-2 text-red-400" /> Candy Love
            </h3>
            <p>Your favorite candy destination. Sweeten your day with us!</p>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:underline flex items-center space-x-2"
                >
                  <FaHeart className="text-red-400" /> <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline flex items-center space-x-2"
                >
                  <FaHeart className="text-red-400" /> <span>Shop</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline flex items-center space-x-2"
                >
                  <FaHeart className="text-red-400" /> <span>About</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline flex items-center space-x-2"
                >
                  <FaHeart  className="text-red-400"/> <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:underline flex items-center space-x-2"
                >
                  <FaHeart className="text-red-400"/> <span>Blog</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline flex items-center space-x-2"
                >
                  <FaHeart className="text-red-400" /> <span>FAQ</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline flex items-center space-x-2"
                >
                  <FaHeart  className="text-red-400"/> <span>Support</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline flex items-center space-x-2"
                >
                  <FaHeart className="text-red-400" /> <span>Privacy Policy</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://facebook.com"
                  className="hover:underline flex items-center space-x-2"
                >
                  <FaFacebook  className="text-red-400"/> <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aqsa-gullofficial99"
                  className="hover:underline flex items-center space-x-2"
                >
                  <FaLinkedin  className="text-red-400"/> <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://yourportfolio.com"
                  className="hover:underline flex items-center space-x-2"
                >
                  <FaHeart  className="text-red-400"/> <span>My Portfolio</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center border-t border-red-400 pt-4">
          <p>© {new Date().getFullYear()} Candy Love. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



