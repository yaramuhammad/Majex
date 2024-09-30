import { useEffect, useState } from "react";
import Loading from "../../Components/Layout/Loading";
import { useTranslation } from "react-i18next";
import PriceCard from "../../Components/FCL/PriceCard";
import { getFCLs } from "../../Utils/functions/getFCLs";

function FCL() {
  const [fclsSmall, setFclsSmall] = useState([]);
  const [fclsLarge, setFclsLarge] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const [tab, setTab] = useState("small");

  async function fetchData() {
    try {
      const response = await getFCLs()
      setFclsSmall(response.filter((fcl) => fcl.size === "small"));
      setFclsLarge(response.filter((fcl) => fcl.size === "large"));
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
          {t("FCL")}
        </p>
        <div className={`flex flex-col px-5 sm:flex-row w-full`}>
          <button
            onClick={() => setTab("large")}
            className={`w-full sm:w-1/2 px-5 py-4 text-center font-bold border-2  mb-4 sm:mb-0 sm:mx-2 ${
              tab === "large"
                ? "text-white  bg-primary"
                : "border-primary text-primary"
            }`}
          >
            {t("Large container")}
          </button>
          <button
            onClick={() => setTab("small")}
            className={`w-full sm:w-1/2 px-5 py-4 text-center font-bold border-2  mb-4 sm:mb-0 sm:mx-2 ${
              tab === "small"
                ? "text-white  bg-primary"
                : "border-primary text-primary"
            }`}
          >
            {t("Small container")}
          </button>
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : tab === "large" ? (
        fclsLarge.map((fcl) => {
          return <PriceCard fcl={fcl} />;
        })
      ) : (
        fclsSmall.map((fcl) => {
          return <PriceCard fcl={fcl} />;
        })
      )}
    </>
  );
}

export default FCL;
