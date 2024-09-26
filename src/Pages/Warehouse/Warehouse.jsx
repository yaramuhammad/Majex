import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loading from "./../../Components/Layout/Loading";
import { getWarehouse } from "../../Utils/functions/GetWarehouse";

function Warehouse() {
  const [warehouseData, setWarehouseData] = useState(null);
  const [userID, setUserID] = useState(0);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    getWarehouse(setWarehouseData, setUserID, setLoading);
  }, []);

  const fieldStyle = "text-lg font-semibold mt-2 flex ";
  const labelStyle = "text-primary";

  return (
    <>
      <div className="relative">
        <img
          src={require("./../../assets/Price-Increase-Strategy-1024x659 2.png")}
          alt="Warehouse"
          className="w-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg px-32 py-7">
            <span className="text-center text-gray-800 font-bold">
              {t("warehouse.China WareHouse")}
            </span>
          </div>
        </div>
      </div>
      <div className="my-3 space-y-4">
        {loading ? (
          <Loading />
        ) : warehouseData ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className={fieldStyle}>
              <p className={labelStyle}>
                {t("warehouse.User Identify")}
                {" : "}
              </p>
              <p>{warehouseData._id}</p>
            </div>
            <div className={fieldStyle}>
              <p className={labelStyle}>
                {t("warehouse.Country")}
                {" : "}
              </p>
              {warehouseData.country}
            </div>
            <div className={fieldStyle}>
              <p className={labelStyle}>
                {t("warehouse.City")}
                {" : "}
              </p>
              {warehouseData.city}
            </div>
            <div className={fieldStyle}>
              <p className={labelStyle}>
                {t("warehouse.District")}
                {" : "}
              </p>
              {warehouseData.district}
            </div>
            <div className={fieldStyle}>
              <p className={labelStyle}>
                {t("warehouse.Street")}
                {" : "}
              </p>
              {warehouseData.street}
            </div>
            <div className={fieldStyle}>
              <p className={labelStyle}>
                {t("warehouse.Building")}
                {" : "}
              </p>
              {warehouseData.building}
            </div>
            <div className={fieldStyle}>
              <p className={labelStyle}>
                {t("warehouse.Phone")}
                {" : "}
              </p>
              {warehouseData.phone}
            </div>
            <div className={fieldStyle}>
              <p className={labelStyle}>
                {t("warehouse.Warehouse No")}
                {" : "}
              </p>
              {warehouseData.warehouseNo}
            </div>
            <div className={fieldStyle}>
              <p className={labelStyle}>
                {t("warehouse.Address English")}
                {" : "}
              </p>
              {warehouseData.addressEnglish}
            </div>
            <div className={fieldStyle}>
              <p className={labelStyle}>
                {t("warehouse.Address China")}
                {" : "}
              </p>
              {warehouseData.addressChina}
            </div>
            <div className="w-full flex py-5 ">
              <div className="p-5 my-3 rounded-2xl shadow w-full md:w-1/2">
                <p className="font-semibold">{t("warehouse.Note")}</p>
                <p>
                  {t(
                    "warehouse.Please make sure to stick your code on your shipment so it could arrive safely"
                  )}
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col md:flex-row">
              <div className="w-full md:w-1/2 py-5">
                <p className="text-primary text-lg font-semibold">
                  {t("warehouse.For Air Shippments")}
                </p>
                <div className="p-5 my-3 rounded-2xl shadow flex flex-col items-center">
                  <p className="font-semibold">Guangzhou</p>
                  <img
                    src={require("./../../assets/logo PNG-01 1.png")}
                    alt="logo"
                    className="w-1/2 my-10"
                  />
                  <p className="font-semibold text-center">SC_Air_{userID}</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 py-5 mx-3">
                <p className="text-primary text-lg font-semibold">
                  {t("warehouse.For Sea Shippments")}
                </p>
                <div className="p-5 my-3 rounded-2xl shadow flex flex-col items-center">
                  <p className="font-semibold">Guangzhou</p>
                  <img
                    src={require("./../../assets/logo PNG-01 1.png")}
                    alt="logo"
                    className="w-1/2 my-10"
                  />
                  <p className="font-semibold text-center">SC_Sea_{userID}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">
            {t("warehouse.Error loading data")}
          </p>
        )}
      </div>
    </>
  );
}

export default Warehouse;
