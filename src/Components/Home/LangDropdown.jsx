import React, { useState, useRef, useEffect } from "react";
import { useTranslation, getI18n } from "react-i18next";

const LanguageDropdown = ({ dir, closeSidebar }) => {
  const { t, i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const i18N = getI18n();
  const currentLanguage = i18N.language;

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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).then(() => {
      setShowDropdown(false);
    });
    document.documentElement.setAttribute("dir", lng === "ar" ? "rtl" : "ltr");
    closeSidebar();
  };

  return (
    <div className="relative" ref={dropdownRef} style={{ zIndex: "99999" }}>
      <div
        className="flex items-center space-x-2 border border-gray-500 px-4 py-2 rounded-2xl hover:text-red-600 hover:border-red-600 cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="text-xs">
          {currentLanguage === "zh"
            ? t("navbar.中文")
            : currentLanguage === "ar"
            ? t("navbar.ar")
            : t("navbar.en")}
        </span>
      </div>
      {showDropdown && (
        <div
          className={`absolute rtl:right-0 ltr:left-0 rtl:xl:left-0 ltr:xl:right-0 bottom-8 xl:top-[100%] xl:bottom-auto ${
            dir === "r" ? "right-0" : "left-0"
          } mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg`}
        >
          <div
            onClick={() => changeLanguage("ar")}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            {t("navbar.ar")}
          </div>
          <div
            onClick={() => changeLanguage("en")}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            {t("navbar.en")}
          </div>
          <div
            onClick={() => changeLanguage("zh")}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            {t("navbar.中文")}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
