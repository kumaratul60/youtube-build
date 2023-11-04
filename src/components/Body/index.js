import React from "react";
import SideBar from "../Sidebar";
// import MainContainer from "../MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex scroll-smooth">
      <SideBar />
      {/* <MainContainer /> */}
      <Outlet />
    </div>
  );
};

export default Body;
