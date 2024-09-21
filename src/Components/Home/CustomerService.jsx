import React from "react";
import headsetImage from "../../assets/customercare.png";
import bestPriceImage from "./../../assets/bestprice.png";
import clockImage from "./../../assets/alltime.png";
import checkImage from "./../../assets/check.png";
import { useTranslation, getI18n } from "react-i18next";

const CustomerService = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto px-5 lg:px-16 my-32">
      <div className="flex flex-col items-center p-4 w-full">
        <div className="flex items-center space-x-6 rtl:space-x-reverse mb-4 flex-col lg:flex-row ">
          <img
            src={headsetImage}
            alt={t("customerService.description")}
            className="rounded-full mb-10"
          />
          <p className="font-medium text-2xl lg:text-3xl mb-10">
            {t("customerService.description")}
          </p>
        </div>
        <div className="flex items-center space-x-6 rtl:space-x-reverse mb-4 flex-col-reverse lg:flex-row ">
          <p className="font-medium text-2xl lg:text-3xl mb-10">
            {t("customerService.availability")}
          </p>
          <img
            src={clockImage}
            alt={t("customerService.availability")}
            className="mb-10"
          />
        </div>
        <div className="flex items-center space-x-6 rtl:space-x-reverse mb-4 flex-col lg:flex-row ">
          <img
            src={bestPriceImage}
            alt={t("customerService.availability")}
            className="mb-10"
          />
          <p className="font-medium text-2xl lg:text-3xl mb-10">
            {t("customerService.availability")}
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full mt-10">
          <div className="flex flex-col items-center md:mx-10 mb-24 md:w-1/3 w-full">
            <img src={checkImage} alt={t("customerService.fastestService")} />
            <p className="font-medium text-2xl mt-2 text-center ">
              {t("customerService.fastestService")}
            </p>
          </div>
          <div className="flex flex-col items-center md:mx-10 mb-24 md:w-1/3 w-full">
            <img src={checkImage} alt={t("customerService.affordablePrices")} />
            <p className="font-medium text-2xl mt-2 text-center ">
              {t("customerService.affordablePrices")}
            </p>
          </div>
          <div className="flex flex-col items-center md:mx-10 md:w-1/3 w-full">
            <img
              src={checkImage}
              alt={t("customerService.safetyAndSecurity")}
            />
            <p className="font-medium text-2xl mt-2 text-center">
              {t("customerService.safetyAndSecurity")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
