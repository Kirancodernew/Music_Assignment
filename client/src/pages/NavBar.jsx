import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMusic } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user,signOut}=useAuth();


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-200 w-full min-h-[70px] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className=" text-3xl font-bold bg-gradient-to-r from-pink-600 to-blue-800 bg-clip-text text-transparent flex items-center"
            >
              <FaMusic className="text-red-600 text-xl mr-2" />{" "}
              {/* Music icon */}
              taalTune
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 group transition duration-600 ease-in-out">
            <Link
              to="/"
              className=" px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-300 text-gray-600 hover:scale-110 transition duration-200 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/songs"
              className=" px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-300 text-gray-600 hover:scale-110 transition duration-200 ease-in-out"
            >
              Songs
            </Link>
            {user ? (
              <Link
                to="/signin"
                onClick={signOut}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-300 hover:scale-110 transition duration-200 ease-in-out"
              >
                Sign Out
              </Link>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-300 text-gray-600 hover:scale-110 transition duration-200 ease-in-out"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-300 text-gray-600 hover:scale-110 transition duration-200 ease-in-out"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={`${isOpen ? "hidden" : "inline-flex"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path
                  className={`${isOpen ? "inline-flex" : "hidden"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 group transition duration-100 ease-in-out">
          <Link
            to="/"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
