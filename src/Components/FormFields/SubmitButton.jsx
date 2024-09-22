import React from "react";
import { ThreeDots } from "react-loader-spinner";

export default function SubmitButton({ text, isSubmitting }) {
  return (
    <button
      type="submit"
      className={`
        ${isSubmitting ? "bg-hover  py-4" : "bg-primary py-2"} mt-8 w-full text-white px-4  rounded-xl flex justify-center`}
        disabled={isSubmitting}
    >
      {isSubmitting ? (
        <ThreeDots
          visible={true}
          height="10"
          width="80"
          color="white"
          radius="1"
        />
      ) : (
        text
      )}
    </button>
  );
}
