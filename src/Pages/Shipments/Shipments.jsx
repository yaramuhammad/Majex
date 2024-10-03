import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Loading from "./../../Components/Layout/Loading";
import ShipmentCard from "./../../Components/Shipments/ShipmentCard";
import { getShipments } from "../../Utils/functions/getShipments";

function Shipments() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [shipments, setShipments] = useState([]);

  const fetchShipments = async () => {
    setLoading(true);
    try {
      const response = await getShipments();
      setShipments(response);
    } catch (error) {
      console.error("Error fetching requests:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShipments();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center ">
        <div>
          <h2 className="pt-7 font-bold text-xl md:text-2xl">
            {t("shipments.shipmentsTitle")}
          </h2>
          <p style={{ color: "#4B4B4B" }} className="pt-2 text-base md:text-lg">
            {t("shipments.shipmentsDescription")}
          </p>
        </div>
        <Link to="/shipments/new">
          <button className="mt-6 px-8 md:px-12 py-2 md:py-3 bg-primary text-white rounded text-base md:text-lg">
            {t("shipments.addNewShipmentButton")}
          </button>
        </Link>
      </div>
      {loading ? (
        <Loading />
      ) : shipments.length > 0 ? (
        <div className="flex flex-col mt-10">
          {shipments.map((shipment) => (
            <ShipmentCard
              shipment={shipment}
              onDelete={() => handleDelete(shipment._id)}
              key={shipment._id}
            />
          ))}
        </div>
      ) : (
        <div>
          <div className="flex flex-col items-center mt-10">
            <img
              src={require("../../assets/Drone Delivery-rafiki 1.png")}
              alt="Central"
              className="mb-5 w-full max-w-xs md:max-w-md"
            />
            <div className="flex flex-col items-center text-center">
              <span className="font-bold text-lg md:text-xl mb-2">
                {t("shipments.addShipmentPrompt")}
              </span>
              <span
                style={{ color: "#4B4B4B" }}
                className="text-base md:text-lg"
              >
                {t("shipments.addShipmentDescription")}
              </span>
            </div>
            <Link to="/addrequest">
              <button className="mt-6 px-8 md:px-12 py-2 md:py-3 bg-primary text-white rounded text-base md:text-lg">
                {t("shipments.addNewShipmentButton")}
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Shipments;
