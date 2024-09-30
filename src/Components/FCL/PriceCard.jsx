import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getI18n } from "react-i18next";

function PriceCard({ fcl }) {
  const i18n = getI18n();
  const currentLanguage = i18n.language;
  return (
    <div className="bg-[#1e1e1e] text-white py-4 px-5 mx-3 my-3 flex flex-col md:flex-row items-center justify-around rounded-2xl ">
      <div className="flex items-center mb-3 md:mb-0 ">
        <FontAwesomeIcon
          icon={currentLanguage === "ar" ? faArrowRight : faArrowLeft}
          className="fa-solid text-white block border-2 p-2 md:p-3 rounded-full mx-2 md:mx-5"
        />
        <p className="text-sm md:text-base">{fcl.to}</p>
      </div>
      <img
        src={require("./../../assets/cargo-ship 2.png")}
        alt="ship"
        className="w-20 md:w-auto mb-3 md:mb-0"
      />
      <div className="bg-white text-black py-2 px-3 rounded-xl mb-3 md:mb-0 text-sm md:text-base">
        ${fcl.totalPrice}
      </div>
      <div className="flex items-center ">
        <p className="text-sm md:text-base">{fcl.from}</p>
        <FontAwesomeIcon
          icon={currentLanguage === "ar" ? faArrowLeft : faArrowRight}
          className="fa-solid text-white block border-2 p-2 md:p-3 rounded-full mx-2 md:mx-5"
        />
      </div>
    </div>
  );
}

export default PriceCard;
