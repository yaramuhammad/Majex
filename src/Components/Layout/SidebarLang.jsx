import React, { useState, useRef, useEffect } from "react";
import { useTranslation, getI18n } from "react-i18next";

const SidebarLang = () => {
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
  };

  return (
    <div className="relative" ref={dropdownRef} style={{ zIndex: "99999" }}>
      <div
        className="flex items-center space-x-2 px-4 pb-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <span>
          {currentLanguage === "zh"
            ? t("sidebar.中文")
            : currentLanguage === "ar"
            ? t("sidebar.Ar")
            : t("sidebar.En")}
        </span>
      </div>
      {showDropdown && (
        <div className="absolute rtl:right-0 ltr:left-0   bottom-8  w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
          <div
            onClick={() => changeLanguage("ar")}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"
          >
            {t("sidebar.Ar")}
          </div>
          <div
            onClick={() => changeLanguage("en")}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"
          >
            {t("sidebar.En")}
          </div>
          <div
            onClick={() => changeLanguage("zh")}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"
          >
            {t("sidebar.中文")}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarLang;
