import React from "react";
import { Field } from "formik";

export default function TextArea({ name, placeholder }) {
  return (
    <Field
      as="textarea"
      name={name}
      placeholder={placeholder}
      className="w-full p-2 border-2 rounded-2xl border-gray-400 focus:border-primary focus:ring-primary"
    />
  );
}
