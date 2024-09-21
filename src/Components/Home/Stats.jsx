import React from "react";
import { useTranslation } from "react-i18next";

const Stats = () => {
  const { t } = useTranslation();

  const stats = [
    {
      value: 28,
      label: t("stats.shipments"),
      image: require("../../assets/Plane.png"),
    },
    {
      value: 159,
      label: t("stats.requests"),
      image: require("../../assets/requests.png"),
    },
    {
      value: 0,
      label: t("stats.products"),
      image: require("../../assets/products.png"),
    },
  ];
  return (
    <div className="mx-auto px-5 lg:px-16 py-10">
      <div className="flex flex-col md:flex-row justify-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="mb-4 w-full md:w-1/3 text-center bg-grey mx-0 md:mx-4 py-10 rounded-3xl text-2xl md:text-3xl xl:text-4xl font-bold flex flex-col justify-center items-center"
          >
            <img className="mb-8" src={stat.image} alt={stat.label} />
            <p>{stat.value}</p>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
