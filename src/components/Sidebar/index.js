import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuBarOpen = useSelector((state) => state.app.isMenuOpen);

  // Early return pattern
  if (!isMenuBarOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>

      <p className=" pt-5 font-bold">Subscriptions</p>
      <ul>
        <li>Music</li>
        <li>Videos</li>
        <li>Games</li>
        <li>Movies</li>
      </ul>

      <p className=" pt-5 font-bold">Watch Later</p>
      <ul>
        <li>Music</li>
        <li>Videos</li>
        <li>Games</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
