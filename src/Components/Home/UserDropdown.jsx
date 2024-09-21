import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { logout } from "./../../Utils/functions/logout";
import { useTranslation } from "react-i18next";

const UserDropdown = ({ isAuthenticated, closeSidebar }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { t } = useTranslation();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef} style={{ zIndex: "99999" }}>
      <FontAwesomeIcon
        icon={faUserCircle}
        size="xl"
        className="hover:text-red-600 cursor-pointer"
        onClick={toggleDropdown}
      />
      {showDropdown && (
        <div
          className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg
          rtl:right-0 ltr:left-0 rtl:xl:left-0 ltr:xl:right-0 bottom-8 xl:top-[100%] xl:bottom-auto"
        >
          {isAuthenticated ? (
            <>
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={closeSidebar}
              >
                {t("navbar.profile")}
              </Link>
              <button
                type="button"
                className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => {
                  logout();
                  closeSidebar();
                }}
              >
                {t("navbar.logout")}
              </button>
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={closeSidebar}
              >
                {t("navbar.register")}
              </Link>
              <Link
                to="/login"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={closeSidebar}
              >
                {t("navbar.login")}
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
