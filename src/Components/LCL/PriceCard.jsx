import { useTranslation } from "react-i18next";

function PriceCard({ id, title, price, multiplier }) {
  const { t } = useTranslation();

  return (
    <div
      key={id}
      className="bg-[#1E1E1E] p-3 rounded-md px-5 sm:px-10 lg:px-14 text-white mx-5 my-3 flex flex-col sm:flex-row justify-between items-center"
    >
      <div>
        <p className="text-[#D1D5DB] text-xl lg:text-2xl"> {title}</p>
        <p className="text-sm py-3">{price} SAR/KG</p>
      </div>
      <div className="bg-white text-black py-2 px-6 rounded-2xl flex justify-between w-full sm:w-1/4 mt-4 sm:mt-0 ">
        <p className="text-lg font-semibold">{t("Total")}</p>
        <p>${isNaN(price * multiplier) ? 0 : price * multiplier}</p>
      </div>
    </div>
  );
}

export default PriceCard;
