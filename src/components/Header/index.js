import { HAMBURGER_MENU, SEARCH_ICON, USER_ICON } from "constants/constant";
import { useEffect, useState } from "react";

import youtubelogoDarkMode from "assets/yt-logoDrakMode.png";
import youtubelogoLightMode from "assets/yt-logoLightMode.png";
import useHeader from "hooks/useHeader";
import { Link } from "react-router-dom";

const Header = () => {
  const {
    searchQuery,
    searchResults,
    showSuggestions,
    hamburgerMenuHandler,
    handleSuggestionClick,
    handleSearchQueryChange,
    handleShowSuggestions,
  } = useHeader();

  const [darkMode, setDarkMode] = useState(false);

  // Add a useEffect to update the theme class on the HTML element
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // DarkMode toggling
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div
        className={` grid grid-flow-col p-2 m-2 shadow-lg ${
          darkMode ? "bg-[#1F2937]" : "bg-white"
        }`}
      >
        <div className="flex col-span-1 ">
          <img
            className="h-6 cursor-pointer"
            src={HAMBURGER_MENU}
            alt="menu"
            onClick={() => {
              hamburgerMenuHandler();
            }}
          />
          <Link to="/">
            <img
              // className="h-10 mt-[-8px] md:h-16 md:mt-[-20px] mx-4 md:mx-6 cursor-pointer"
              // src={YOUTUBE_LOGO}
              className="h-4 md:h-6 md:mx-4 mx-1"
              src={darkMode ? youtubelogoDarkMode : youtubelogoLightMode}
              alt="yt-logo"
            />
          </Link>
        </div>

        <div className="col-span-10">
          <div className="sticky top-0 bg-white z-50">
            <div className=" flex items-center justify-center mt-[-8px] md:mt-0">
              <input
                className="rounded-l-full p-2 pl-4 w-1/2 border border-sky-300 focus:outline-none focus:shadow-outline focus:border-2 focus:border-blue-500 shadow-sm text-gray-600 placeholder-gray-500"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchQueryChange}
                onFocus={handleShowSuggestions}
                // onBlur={() => setShowSuggestions(false)}
              />
              <div className="rounded-r-full px-5 py-[8px]  md:py-[7px] border border-gray-500 cursor-pointer bg-gray-50">
                <img className="h-6" src={SEARCH_ICON} alt="search-logo" />
              </div>
            </div>
          </div>
          {showSuggestions && (
            <div className="absolute bg-white w-full md:w-[38%] lg:w-[30%] p-3 rounded-lg py-2  mt-2 md:mt-0 md:ml-[18rem]  shadow-xl z-10 ">
              {showSuggestions &&
                searchResults.map((result, i) => (
                  <Link to={`/results?searchQuery=${result}`} key={i}>
                    <div
                      key={i}
                      className="text-gray-900 font-semibold m-1 p-1 border-b flex hover:bg-gray-100 hover: rounded-lg "
                      onClick={() => handleSuggestionClick(result)}
                    >
                      <img
                        className="h-4"
                        src={SEARCH_ICON}
                        alt="search-logo"
                      />
                      <p className="px-3">{result}</p>
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </div>

        <div className="col-span-1">
          <img className="h-8" src={USER_ICON} alt="user" />
        </div>

        {/* <div className="cursor-pointer col-span-2 ">
          <img
            className="h-8"
            src={darkMode ? DARK_THEME : LIGHT_THEME}
            alt={darkMode ? "dark-theme-icon" : "light-theme-icon"}
            onClick={() => toggleTheme()}
          />
        </div> */}
      </div>
    </>
  );
};

export default Header;
