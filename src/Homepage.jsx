import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filteredData, setFilteredData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // figure out the index range
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // slice the filtered list to show only that part
  const currentItems = filteredData.slice(startIndex, endIndex);

  function handleFilter(region) {
    setSelectedRegion(region);

    if (region === "All") {
      setFilteredData(data); // Show all countries
    } else {
      const filtered = data.filter((country) => country.region === region);
      setFilteredData(filtered);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

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
              className="dropdown-content menu bg-white rounded-lg z-1 w-full p-2 shadow-sm"
            >
              <li className="hover:bg-gray-400">
                <a onClick={() => handleFilter("All")}>All</a>
              </li>
              <li className="hover:bg-gray-400">
                <a onClick={() => handleFilter("Africa")}>Africa</a>
              </li>
              <li className="hover:bg-gray-400">
                <a onClick={() => handleFilter("Americas")}>America</a>
              </li>
              <li className="hover:bg-gray-400">
                <a onClick={() => handleFilter("Asia")}>Asia</a>
              </li>
              <li className="hover:bg-gray-400">
                <a onClick={() => handleFilter("Europe")}>Europe</a>
              </li>
              <li className="hover:bg-gray-400">
                <a onClick={() => handleFilter("Ocenia")}>Ocenia</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredData.map((country, index) => (
            <li key={index}>
              <div>
                <div className="shadow-lg shadow-gray-500 rounded-lg">
                  <img
                    src={country.flags.png}
                    alt={country.name.common}
                    className="h-50 w-full rounded-t-lg"
                  />
                  <div className="p-2 w-fit">
                    <h1 className="font-bold text-lg">{country.name.common}</h1>
                    <p>
                      <span className="font-bold">Population: </span>
                      {country.population}
                    </p>
                    <p>
                      <span className="font-bold">Region: </span>
                      {country.region}
                    </p>
                    <p>
                      <span className="font-bold">Capital: </span>
                      {country.capital}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((country, index) => (
            <li key={index}>
              <div>
                <div className="shadow-lg shadow-gray-500 rounded-lg">
                  <img
                    src={country.flags.png}
                    alt={country.name.common}
                    className="h-50 w-full rounded-t-lg"
                  />
                  <div className="p-2 w-fit">
                    <h1 className="font-bold text-lg">{country.name.common}</h1>
                    <p>
                      <span className="font-bold">Population: </span>
                      {country.population}
                    </p>
                    <p>
                      <span className="font-bold">Region: </span>
                      {country.region}
                    </p>
                    <p>
                      <span className="font-bold">Capital: </span>
                      {country.capital}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Homepage;
