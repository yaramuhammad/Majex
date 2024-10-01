import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logout } from "../../Utils/functions/logout";
import { useTranslation } from "react-i18next";
import SocialMediaIcons from "../Home/SocialMediaIcons";
import SidebarLang from "./SidebarLang";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./sidebar.module.css";

import {
  faUser,
  faBasketShopping,
  faBox,
  faBoxesPacking,
  faCartShopping,
  faHeadset,
  faTag,
  faWarehouse,
  faBars,
  faHouse,
  faEarthAmerica,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { t } = useTranslation();
  const [isAuthenticated] = useState(
    localStorage.getItem("token") == null ? false : true
  );

  const items = [
    { img: faUser, text: t("sidebar.Profile"), link: "/profile" },
    { img: faTag, text: t("sidebar.priceOrder"), link: "/placeorder" },
    { img: faBoxesPacking, text: t("sidebar.requests"), link: "/requests" },
    { img: faBox, text: t("sidebar.shipments"), link: "/shipments" },
    { img: faCartShopping, text: t("sidebar.shopNow"), link: "/shop" },
    { img: faBasketShopping, text: t("sidebar.orders"), link: "/route6" },
    { img: faWarehouse, text: t("sidebar.warehouse"), link: "/warehouse" },
    { img: faHeadset, text: t("sidebar.contact"), link: "/contact" },
  ];

  return (
    <div
      className={` 
                ${styles.sidebar}
                flex flex-col justify-around
                xl:col-span-2 lg:col-span-3 bg-primary p-5 pt-1 ltr:rounded-tr-xl 
                rtl:rounded-tl-xl overflow-auto h-screen fixed top-0
                rtl:right-0 ltr:left-0 transform 
                ${
                  isOpen
                    ? "translate-x-0"
                    : "rtl:translate-x-full ltr:-translate-x-full rtl:lg:translate-x-0 ltr:lg:translate-x-0"
                } 
                transition-transform duration-300 ease-in-out z-50 
                lg:static lg:transform-none
              `}
    >
      <div
        className={`w-100 pt-4 flex items-center space-x-4 pb-8 rtl:space-x-reverse`}
      >
        <FontAwesomeIcon
          icon={faBars}
          className="text-white fa-2xl cursor-pointer"
          onClick={toggleSidebar}
        ></FontAwesomeIcon>
        <Link to="/" className="block">
          <FontAwesomeIcon
            icon={faHouse}
            className=" text-white fa-2xl"
          ></FontAwesomeIcon>
        </Link>
      </div>

      {items.map((item, index) => (
        <Link to={item.link} className="text-white no-underline" key={index}>
          <div className="w-full flex items-center space-x-4 py-4 pb-3">
            <div className="w-1/4">
              <FontAwesomeIcon
                icon={item.img}
                className=" text-white fa-lg"
              ></FontAwesomeIcon>
            </div>
            <div className="w-3/4">{item.text}</div>
          </div>
        </Link>
      ))}

      <div className="w-full flex items-center space-x-4 py-2 pt-4">
        <div>
          <FontAwesomeIcon
            icon={faEarthAmerica}
            className="text-white fa-lg"
          ></FontAwesomeIcon>
        </div>
        <div>
          <span className="text-white">
            <SidebarLang />
          </span>
        </div>
      </div>

      {isAuthenticated ? (
        <button onClick={Logout} className="text-white no-underline w-full">
          <div className="w-full flex items-center space-x-4 py-2 pt-4 mb-7">
            <div>
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="text-white fa-lg"
              ></FontAwesomeIcon>
            </div>
            <div className="w-1/2">{t("sidebar.logout")}</div>
          </div>
        </button>
      ) : (
        <></>
      )}

      <SocialMediaIcons />
    </div>
  );
};

export default Sidebar;
