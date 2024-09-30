import { useState } from "react";
import { useTranslation } from "react-i18next";

function CalcPrice({ setMultiplier, type, divisor }) {
  const { t } = useTranslation();

  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [cartonPcs, setCartonPcs] = useState("");
  const [weight, setWeight] = useState(0);

  const handleCalculation = () => {
    const lengthNum = parseFloat(length) || 0;
    const widthNum = parseFloat(width) || 0;
    const heightNum = parseFloat(height) || 0;
    const cartonPcsNum = parseInt(cartonPcs) || 0;
    let calculatedWeight;
    if (type === "air") {
      calculatedWeight = (lengthNum * widthNum * heightNum) / divisor;
    } else {
      calculatedWeight =
        (lengthNum * widthNum * heightNum * cartonPcsNum) / divisor;
    }

    setWeight(calculatedWeight.toFixed(2));

    setMultiplier(calculatedWeight);
  };

  let inputStyle =
    "border-2 mx-2 border-primary w-full md:w-1/5 rounded-2xl p-3 text-xl mb-4 md:mb-0";

  return (
    <div className="mx-5 text-2xl lg:text-4xl font-semibold text-center py-5">
      {t("Calculate")}
      <form
        className="my-10 flex flex-col items-center justify-center sm:justify-start md:flex-row "
        onSubmit={(e) => {
          e.preventDefault();
          handleCalculation();
        }}
      >
        <input
          type="text"
          name="length"
          className={inputStyle}
          placeholder={t("Length")}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <input
          type="text"
          name="width"
          className={inputStyle}
          placeholder={t("Width")}
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <input
          type="text"
          name="height"
          className={inputStyle}
          placeholder={t("Height")}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="text"
          name="cartonpcs"
          className={`${inputStyle} ${type === "air" ? "hidden" : ""}`}
          placeholder={t("Cartoon Pieces")}
          value={cartonPcs}
          onChange={(e) => setCartonPcs(e.target.value)}
        />
      </form>
      <p className="w-full md:w-1/5 text-primary text-xl xl:text-3xl pb-2 text-center md:text-left">
        / {divisor} = {weight} kg,
      </p>

      <button
        onClick={handleCalculation}
        className="text-xl xl:text-2xl px-4 py-2 mt-4 md:mt-0 md:ml-4 bg-primary text-white rounded-2xl"
      >
        {t("Calculate")}
      </button>
    </div>
  );
}

export default CalcPrice;
