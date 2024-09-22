import React from "react";
import { Field, ErrorMessage } from "formik";

export default function TextField({ type, name, placeholder, label = "" }) {
  return (
    <div className="w-full mb-5 md:mr-2">
      <label htmlFor={name} className="text-sm font-semibold mb-2 block">
        {label}
      </label>
      <Field
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full p-2 rounded-2xl border-gray-400 focus:border-primary focus:ring-primary px-4 border-2 outline-none"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs"
      />
    </div>
  );
}
