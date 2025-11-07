import React from "react";
import { IoMoonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <header className="backdrop-blur-xl bg-white shadow-sm border-b border-gray-50 fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4 py-6">
          <div className="flex justify-between">
            <h1 className="font-bold md:text-2xl">Where in the World?</h1>
            <div className="flex">
            <IoMoonOutline  className="mt-1.5 w-8"/>
            <p className="font-bold">Dark Mode </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
