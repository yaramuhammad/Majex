import React from "react";

export default function Select({
  arr,
  setFieldValue,
  field,
  comparisonValue,
  firstLabel,
  secondLabel,
  value,
  label
}) {
  return (
    <div>
      <label htmlFor={field} className="text-sm font-semibold">
        {label}
      </label>
      <div className="mt-1 flex space-x-2 rtl:space-x-reverse">
        {arr.map((key) => (
          <div
            key={key}
            className={`px-4 py-2 border cursor-pointer rounded ${
              value === key
                ? "bg-primary text-white"
                : "bg-white text-gray-700"
            }`}
            onClick={() => setFieldValue(field, key)}
          >
            {key == comparisonValue ? firstLabel : secondLabel}
          </div>
        ))}
      </div>
    </div>
  );
}
