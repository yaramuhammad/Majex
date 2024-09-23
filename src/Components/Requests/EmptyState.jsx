import { Link } from "react-router-dom";

const EmptyState = ({ t }) => (
  <div className="flex flex-col items-center mt-10">
    <img
      src={require("../../assets/Checking boxes-bro 1.png")}
      alt="Empty"
      className="mb-5 w-full max-w-xs md:max-w-md"
    />
    <div className="flex flex-col items-center text-center">
      <span className="font-bold text-lg md:text-xl mb-2">
        {t("requests.addRequestPrompt")}
      </span>
      <span style={{ color: "#4B4B4B" }} className="text-base md:text-lg">
        {t("requests.addRequestDescription")}
      </span>
    </div>
    <Link to="/addrequest">
      <button className="mt-6 px-8 md:px-12 py-2 md:py-3 bg-primary text-white rounded text-base md:text-lg rtl:text-right">
        {t("requests.addNewRequestButton")}
      </button>
    </Link>
  </div>
);

export default EmptyState;
