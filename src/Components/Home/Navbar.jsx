import React, { useState } from "react";
import { useTranslation, getI18n } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../assets/logo PNG-01 1.png";
import UserDropdown from "./UserDropdown";
import LanguageDropdown from "./LangDropdown";
import PricesDropdown from "./PricesDropdownn";

const Navbar = () => {
  const { t } = useTranslation();
  const [isAuthenticated] = useState(!!localStorage.getItem("token"));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navLinks = [
    { to: "/", label: "navbar.home" },
    { to: "/placeorder", label: "navbar.priceOrder" },
    { to: "/requests", label: "navbar.requests" },
    { to: "/shipment", label: "navbar.shipments" },
    { to: "/shop", label: "navbar.shopNow" },
    { to: "/services", label: "navbar.services" },
  ];

  const SidebarLink = ({ to, label }) => (
    <Link
      to={to}
      onClick={() => setIsSidebarOpen(false)}
      className="hover:text-primary font-bold py-2 px-4"
    >
      {t(label)}
    </Link>
  );

  return (
    <div className="relative bg-white">
      <div className="container mx-auto px-4 lg:px-12 py-3 flex justify-between items-center">
        <div className="flex items-center w-full xl:w-1/4 xl:flex-row justify-between">
          <Link to='/'>
            <img
              src={logo}
              alt="Majex International"
              className="xl:w-1/2 md:w-1/4 w-1/2 h-auto"
            />
          </Link>
          <button
            className="xl:hidden text-gray-500 focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden text-sm xl:text-base xl:flex xl:items-center xl:flex-row">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="hover:text-primary font-bold px-2 py-2"
            >
              {t(label)}
            </Link>
          ))}
          <PricesDropdown />
        </div>

        <div className="hidden xl:flex items-center space-x-4 relative rtl:space-x-reverse">
          <UserDropdown
            isAuthenticated={isAuthenticated}
            closeSidebar={() => setIsSidebarOpen(false)}
          />
          <LanguageDropdown closeSidebar={() => setIsSidebarOpen(false)} />
        </div>
      </div>

      <div
        className={`fixed inset-y-0 rtl:left-0 ltr:right-0 transform transition-transform duration-300 ease-in-out bg-white w-64 shadow-lg z-50 ${
          isSidebarOpen
            ? "translate-x-0"
            : "translate-x-full rtl:-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <img src={logo} alt="Majex International" className="w-20 h-auto" />
          <button
            className="text-gray-500 focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col mt-4 space-y-4">
          {navLinks.map(({ to, label }) => (
            <SidebarLink key={to} to={to} label={label} />
          ))}
          <PricesDropdown />
        </div>
        <div className="flex items-center space-x-4 p-4 rtl:space-x-reverse">
          <UserDropdown
            isAuthenticated={isAuthenticated}
            closeSidebar={() => setIsSidebarOpen(false)}
          />
          <LanguageDropdown dir="up" closeSidebar={() => setIsSidebarOpen(false)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
