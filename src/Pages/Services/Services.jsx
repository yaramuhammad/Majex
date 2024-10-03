import { useTranslation } from "react-i18next";

function OurServices() {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="pt-7 font-bold text-xl md:text-3xl text-primary">
        {t("ourServices.Services")}
      </h2>

      <div className="py-3 px-1">
        <h2 className="text-xl md:text-2xl font-bold">
          {t("ourServices.Product sourcing")}
        </h2>
        <p className="text-base md:text-lg py-5 leading-loose tracking-wide">
          {t("ourServices.Product sourcing description")}
        </p>
      </div>

      <div className="py-3 px-1">
        <h2 className="text-xl md:text-2xl font-bold">
          {t("ourServices.Quality Inspection")}
        </h2>
        <div className="flex flex-col md:flex-row justify-between ">
          <p className="text-base md:text-lg py-5 leading-loose tracking-wide">
            {t("ourServices.Quality Inspection description")}
          </p>
          <img
            className="w-full md:w-1/2 mt-4 md:mt-0"
            src={require("./../../assets/Manufacturing Process-pana 1.png")}
            alt="Manufacturing"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end ">
        <div className="w-full md:w-1/2">
          <div className="py-3 px-1">
            <h2 className="text-xl md:text-2xl font-bold">
              {t("ourServices.Production Management")}
            </h2>
            <p className="text-base md:text-lg py-5 leading-loose tracking-wide">
              {t("ourServices.Production Management description")}
            </p>
          </div>
          <div className="py-3 px-1">
            <h2 className="text-xl md:text-2xl font-bold">
              {t("ourServices.Production Management")}
            </h2>
            <p className="text-base md:text-lg py-5 leading-loose tracking-wide">
              {t("ourServices.Production Management description")}
            </p>
          </div>
        </div>
        <img
          className="w-full md:w-auto mt-4 md:mt-0"
          src={require("./../../assets/Office management-rafiki 1.png")}
          alt="office"
        />
      </div>
    </>
  );
}

export default OurServices;
