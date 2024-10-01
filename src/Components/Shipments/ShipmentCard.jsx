import { Link } from "react-router-dom";
import { useTranslation, getI18n } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ShipmentCard({ shipment, onDelete }) {
  const { t } = useTranslation();
  const i18n = getI18n();
  const currentLanguage = i18n.language;

  return (
    <div
      key={shipment._id}
      className="flex flex-col md:flex-row justify-between items-center bg-white shadow-lg p-4 mb-4 rounded-2xl w-full "
    >
      <div className="py-5 px-2 w-full md:w-1/2">
        <span className="text-white font-semibold bg-[#4184D2] px-4 py-2 rounded">
          {t(
            `shipments.${
              shipment.status.charAt(0).toUpperCase() + shipment.status.slice(1)
            }`
          )}
        </span>
        <p className="font-bold text-lg mt-4 mb-2">
          Tracking Number: {shipment.trackingNumber}
        </p>
        <p className="text-[#4B4B4B]">
          {new Date(shipment.createdAt).toLocaleString(
            currentLanguage === "ar" ? "ar-EG" : "en-US"
          )}
        </p>
        <p className="mt-4 mb-2">
          {t("shipments.from")} {shipment.supplierAddress} {t("shipments.to")}{" "}
          {shipment.receivingAddress}
        </p>
      </div>
      <div className="min-w-full md:min-w-80 flex flex-col items-center px-2 md:px-16 mt-4 md:mt-0">
        <img
          src={require("./../../assets/logo PNG-01 1.png")}
          alt={shipment.productName}
          className="w-full md:w-1/2 max-w-xs object-contain mb-4"
        />
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <Link
            to={`/shipments/details/${shipment._id}`}
            className="text-primary text-lg md:text-xl mb-2 md:mb-0"
          >
            {t("shipments.Details")}
          </Link>
          <button
            className="text-primary text-lg md:text-xl flex items-center space-x-2 "
            onClick={() => {
              onDelete(shipment._id);
            }}
          >
            <FontAwesomeIcon icon={faTrash} className="rtl:ml-2 ltr:mr-2" />
            {t("shipments.Delete")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShipmentCard;
