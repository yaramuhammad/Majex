import React from "react";
import { useTranslation } from "react-i18next";
import lockIcon from "./../../assets/lock.png";
import plusIcon from "./../../assets/plus.png";
import crownIcon from "./../../assets/crown.png";
import fireIcon from "./../../assets/fire.png";

const Packages = () => {
  const { t } = useTranslation();
  let backgroundColors = [
    "bg-gradient-to-t from-[#E1D3A2] to-[#FAF4DF]",
    "bg-gradient-to-t from-[#B5A095]  to-[#FFEDE3",
    "bg-gradient-to-t from-[#D8D5EA] to-[#ffffff]",
  ];

  const packages = t("packages.list", { returnObjects: true });

  return (
    <div className="mx-auto px-4 md:px-16 py-10">
      <div className="flex flex-col items-center mb-10">
        <img src={fireIcon} alt="fire" className="w-16 h-16" />
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          {t("packages.header.title")}
        </h2>
      </div>
      <p className="text-center text-lg md:text-2xl mb-8">
        {t("packages.header.subtitle")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`rtl:rounded-tl-[10rem] ltr:rounded-tr-[10rem] mx-auto xs:w-1/2 flex flex-col pt-12 pb-6 px-6 md:pt-24 md:pb-10 md:px-12 rounded-lg shadow-md text-center border-2 ${backgroundColors[index]}`}
          >
            <div className="flex justify-center mb-4">
              <img
                src={
                  index === 0 ? lockIcon : index === 1 ? plusIcon : crownIcon
                }
                alt={pkg.title}
              />
            </div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              {pkg.title}
            </h2>
            <p className="text-xl md:text-2xl font-semibold mb-4 text-primary">
              {pkg.price}
            </p>
            <ul className="text-left mb-4 space-y-2 list-disc">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="text-sm md:text-base rtl:text-right">
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-auto bg-primary text-white py-2 px-4 md:py-2 md:px-8 rounded-lg place-self-center">
              {t("packages.button")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
