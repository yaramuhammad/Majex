import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import TabButton from "../../Components/Layout/TabButton";
import SingleRequestForm from "../../Components/Requests/SingleRequestForm";
import MultipleRequestsForm from "../../Components/Requests/MultipleRequestsForm";

const AddRequest = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState("single");

  return (
    <>
      <div className="flex flex-col md:flex-row justify-evenly mt-4">
        <TabButton
          label={t("addRequest.uploadSingleProducts")}
          isActive={tab === "single"}
          onClick={() => setTab("single")}
        />
        <TabButton
          label={t("addRequest.uploadMultipleProducts")}
          isActive={tab === "multiple"}
          onClick={() => setTab("multiple")}
        />
      </div>
      {tab === "single" ? <SingleRequestForm /> : <MultipleRequestsForm />}
    </>
  );
};

export default AddRequest;
