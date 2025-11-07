import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Homepage = () => {
  return (
    <section className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4 py-28">
      <div>
        <div className="md:flex justify-between">
          <div className="flex p-2 space-x-3 rounded-xl border-2 border-black w-fit mt-2 md:mt-0 focus-within:border-red-500 transition-colors">
            <img
              src="https://res.cloudinary.com/dmb5ggmvg/image/upload/v1762371448/SVG_i8lnpj.png"
              alt="search-icon"
              className="w- h-6 mt-0.5 text-black"
            />
            <input
              type="search"
              placeholder="Search for a country..."
              className="border-none outline-none bg-transparent w-full over"
            />
          </div>

          <div className="dropdown dropdown-start mt-2 gap-2">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 hover:bg-gray-400 rounded-lg outline-none border-0 gap-4 text-xs md:text-[16px]"
            >
              Filter by Region
              <span>
                <RiArrowDropDownLine className="w-8 h-8" />
              </span>
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-full p-2 shadow-sm"
            >
              <li className="hover:bg-gray-400">
                <a>Africa</a>
              </li>
              <li className="hover:bg-gray-400">
                <a>America</a>
              </li>
              <li className="hover:bg-gray-400">
                <a>Asia</a>
              </li>
              <li className="hover:bg-gray-400">
                <a>Europe</a>
              </li>
              <li className="hover:bg-gray-400">
                <a>Oceania</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
