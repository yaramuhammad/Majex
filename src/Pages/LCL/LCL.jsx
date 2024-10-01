import { useEffect, useState } from "react";
import PriceCard from "../../Components/LCL/PriceCard";
import CalcPrice from "../../Components/LCL/CalcPrice";
import { useTranslation } from "react-i18next";
import Loading from "../../Components/Layout/Loading";
import { getLCLs } from "../../Utils/functions/getLCLs";

function LCL() {
  const [lclsSea, setLclsSea] = useState([]);
  const [lclsAir, setLclsAir] = useState([]);
  const [tab, setTab] = useState("sea");
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const [multiplier, setMultiplier] = useState(0);

  async function fetchData() {
    try {
      const response = await getLCLs();
      setLclsSea(
        response.filter((lcl) => lcl.shippingMethod === "sea")
      );
      setLclsAir(
        response.filter((lcl) => lcl.shippingMethod === "air")
      );
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <p className="mx-5 text-2xl lg:text-3xl text-primary my-4 font-semibold">
          {t("prices.LCL")}
        </p>
        <div className={`flex flex-col px-5 sm:flex-row w-full`}>
          <button
            onClick={() => setTab("sea")}
            className={`w-full sm:w-1/2 px-5 py-4 text-center font-bold border-2  mb-4 sm:mb-0 sm:mx-2 ${
              tab === "sea"
                ? "text-white  bg-primary"
                : "border-primary text-primary"
            }`}
          >
            {t("prices.Sea shipping")}
          </button>
          <button
            onClick={() => setTab("air")}
            className={`w-full sm:w-1/2 px-5 py-4 text-center font-bold border-2  mb-4 sm:mb-0 sm:mx-2 ${
              tab === "air"
                ? "text-white  bg-primary"
                : "border-primary text-primary"
            }`}
          >
            {t("prices.Air shipping")}
          </button>
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : tab == "sea" ? (
        lclsSea.map((lcl) => (
          <PriceCard
            key={lcl._id}
            id={lcl._id}
            title={lcl.goodsType}
            price={lcl.priceInSARPerCBM}
            multiplier={multiplier}
          />
        ))
      ) : (
        lclsAir.map((lcl) => (
          <PriceCard
            key={lcl._id}
            id={lcl._id}
            title={lcl.goodsType}
            price={lcl.priceInSARPerCBM}
            multiplier={multiplier}
          />
        ))
      )}
      <CalcPrice
        setMultiplier={setMultiplier}
        type={tab}
        divisor={tab == "sea" ? 1000000 : 6000}
      />
    </>
  );
}

export default LCL;
