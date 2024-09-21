import React from "react";
import image1 from "./../../assets/service1.png";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      title: t("services.title1"),
      description: t("services.description1"),
      image: image1,
    },
    {
      title: t("services.title2"),
      description: t("services.description2"),
      image: image1,
    },
    {
      title: t("services.title3"),
      description: t("services.description3"),
      image: image1,
    },
    { image: image1 },
  ];
  return (
    <div className="mx-auto px-5 lg:px-16 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="relative">
            <img
              src={service.image}
              alt={service.title}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 p-2 lg:p-6">
              {service.title && (
                <div className="max-h-min bg-white px-12 py-6 text-xl font-bold">
                  <h2 className="text-base md:text-lg lg:text-xl font-bold">{service.title}</h2>
                  <p className=" text-xs sm:text-sm lg:text-base">{service.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
