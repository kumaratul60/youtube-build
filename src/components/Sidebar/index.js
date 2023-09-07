import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  HISTORY_ICON,
  HOME_ICON,
  LIBRARY_ICON,
  LIKE_ICON,
  MUSIC_ICON,
  NEWS_ICON,
  SHOPPING_ICON,
  SHORTS_ICON,
  SPORTS_ICON,
  SUBSCRIPTION_ICON,
  TRANDING_ICON,
  WATCH_LATER_ICON,
  YOURVIDEO_ICON,
} from "../../constants/constant";

const SideBar = () => {
  const isMenuBarOpen = useSelector((state) => state.app.isMenuOpen);

  // Early return pattern
  if (!isMenuBarOpen) return null;

  return (
    <div className="flex flex-col gap-5 pl-7 col-span-1 z-10">
      <ul className="flex flex-col gap-3 text-slate-700">
        <li className="flex gap-6">
          <img alt="home" src={HOME_ICON} className="w-5 h-5" />
          <Link to="/"> Home</Link>
        </li>
        <li className="flex gap-6">
          <img alt="home" src={SHORTS_ICON} className="w-5 h-5" />
          Shorts
        </li>
        <li className="flex gap-6">
          <img
            alt="subscriptions"
            className="w-5 h-5"
            src={SUBSCRIPTION_ICON}
          />
          Subscriptions
        </li>
      </ul>

      <div className="w-56 h-0.5 bg-slate-200 "></div>

      <ul className="flex flex-col gap-3 text-slate-700">
        <li className="flex align-middle gap-6">
          <img alt="home" src={LIBRARY_ICON} className="w-5 h-5" />
          Library
        </li>
        <li className="flex align-middle gap-6">
          <img alt="home" src={HISTORY_ICON} className="w-5 h-5" />
          History
        </li>
        <li className="flex align-middle gap-6">
          <img alt="home" src={YOURVIDEO_ICON} className="w-5 h-5" />
          Your Videos
        </li>
        <li className="flex align-middle gap-6">
          <img alt="home" src={WATCH_LATER_ICON} className="w-5 h-5" />
          Watch Later
        </li>
        <li className="flex align-middle gap-6">
          <img alt="home" src={LIKE_ICON} className="w-5 h-5" />
          Liked Videos
        </li>
      </ul>

      <div className="w-56 h-0.5 bg-slate-200"></div>
      <div>
        <h3 className="text-lg font-medium text-black pb-3">Explore</h3>
        <ul className="flex flex-col gap-3 text-slate-700">
          <li className="flex gap-6">
            <img alt="home" src={TRANDING_ICON} className="w-5 h-5" />
            Trending
          </li>
          <li className="flex gap-6">
            <img alt="home" src={SHOPPING_ICON} className="w-5 h-5" />
            Shopping
          </li>
          <li className="flex gap-6">
            <img alt="home" src={MUSIC_ICON} className="w-5 h-5" />
            Music
          </li>

          <li className="flex gap-6">
            <img alt="home" src={NEWS_ICON} className="w-5 h-5" />
            News
          </li>
          <li className="flex gap-6">
            <img alt="home" src={SPORTS_ICON} className="w-5 h-5" />
            Sport
          </li>
        </ul>
      </div>

      <div className="w-56 h-0.5 bg-slate-200"></div>

      <div>
        <h3 className="text-lg font-medium pb-3 text-black">
          More from YouTube
        </h3>
      </div>

      <div className="w-56 h-0.5 bg-slate-200"></div>
    </div>
  );
};

export default SideBar;
