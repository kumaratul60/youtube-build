import React from "react";
import {
  HAMBURGER_MENU,
  YOUTUBE_LOGO,
  USER_ICON,
  SEARCH_ICON,
} from "../../constants/constant";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/slices/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  

  const hamburgerMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          className="h-6 cursor-pointer"
          src={HAMBURGER_MENU}
          alt="menu"
          onClick={() => {
            hamburgerMenuHandler();
          }}
        />
        <a href = "/">
        <img
          className="h-16 mt-[-20px] mx-6 cursor-pointer"
          src={YOUTUBE_LOGO}
          alt="yt-logo"
        />
        </a>
      </div>

      <div className=" col-span-10  flex items-center justify-center ">
        <input
          className="rounded-l-full p-2 pl-4 w-1/2 border border-sky-300 focus:outline-none focus:shadow-outline focus:border-blue-400 shadow-sm text-gray-600 placeholder-gray-500"
          type="text"
          placeholder="Search"
        />
        <div className="rounded-r-full px-5 py-[5px] border border-gray-500 cursor-pointer bg-gray-50">
          <img className="h-6" src={SEARCH_ICON} alt="search-logo" />
        </div>
      </div>

      <div className="col-span-1">
        <img className="h-8" src={USER_ICON} alt="user" />
      </div>
    </div>
  );
};

export default Header;
