import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="grid grid-cols-12 h-screen lg:overflow-hidden">
      <button
        className="fixed p-3 py-5 z-50 lg:hidden w-full flex shadow bg-white justify-start"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faBars} className="text-3xl text-primary" />
      </button>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="col-span-12 h-full flex flex-col py-16 lg:py-5 px-5 lg:overflow-y-auto lg:col-span-9 xl:col-span-10">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
