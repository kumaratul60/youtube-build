import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuBarOpen = useSelector((state) => state.app.isMenuOpen);

  // Early return pattern
  if (!isMenuBarOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48 bg-white rounded-lg">
      <ul className="mb-4">
        <li className="mb-2">
          <Link to="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </li>
        <li className="mb-2">Shorts</li>
        <li className="mb-2">Videos</li>
        <li className="mb-2">Live</li>
      </ul>

      <p className="pt-5 font-bold text-gray-700 py-2">Subscriptions</p>
      <ul className="mb-4 ">
        <li className="mb-2">Music</li>
        <li className="mb-2">Videos</li>
        <li className="mb-2">Games</li>
        <li className="mb-2">Movies</li>
      </ul>

      <p className="pt-5 font-bold text-gray-700 py-2">Watch Later</p>
      <ul>
        <li className="mb-2">Music</li>
        <li className="mb-2">Videos</li>
        <li className="mb-2">Games</li>
        <li className="mb-2">Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
