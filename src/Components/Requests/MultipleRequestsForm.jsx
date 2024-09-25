import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import MediaUploader from "./../../Components/FormFields/MediaUploader";
import TextField from "../../Components/FormFields/TextField";
import TextArea from "../../Components/FormFields/TextArea";
import Select from "../../Components/FormFields/Select";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../FormFields/SubmitButton";
import { CreateMultipleRequests } from "../../Utils/functions/CreateMultipleRequests";

const validationSchema = Yup.object({
  productName: Yup.string().required("Product name is required"),
  targetPrice: Yup.number()
    .required("Target price is required")
    .typeError("Target price must be a number"),
});

const MultipleRequestsForm = () => {
  const { t } = useTranslation();
  const [uploadedFile, setUploadedFile] = useState(null);
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    if (!uploadedFile) {
      errors.media = "File is required";
    }
    return errors;
  };

  const handleSubmit = async (values) => {
    try {
      const response = await CreateMultipleRequests(values, uploadedFile);
      if (response) {
        console.log("Request successful:", response.data);
        toast.success("Request successful");
        setTimeout(() => {
          navigate("/requests");
        }, 2000);
      }
    } catch (error) {
      console.error("Error making request:", error);
      toast.error("Error making request");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          productName: "",
          targetPrice: "",
          note: "",
          shipmentType: "over air",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {({ setFieldValue, values, isSubmitting, errors }) => (
          <Form className="md:px-24 mt-10">
            <div className="flex flex-col md:flex-row items-center mb-5">
              <div className="w-full md:w-2/3 flex flex-col">
                <label className="block mb-2 text-2xl font-semibold">
                  {t("addRequest.packingList")}
                </label>
                <MediaUploader
                  uploadedFile={uploadedFile}
                  setUploadedFile={setUploadedFile}
                  fileType="file"
                  accept="*/*"
                />
                {errors.media && (
                  <div className="text-red-500">{errors.media}</div>
                )}
              </div>

              <Select
                arr={["over sea", "over air"]}
                setFieldValue={setFieldValue}
                field={"shipmentType"}
                comparisonValue={"over sea"}
                firstLabel={t("addRequest.overSea")}
                secondLabel={t("addRequest.overAir")}
                value={values.shipmentType}
                label={t("addRequest.shipmentType")}
              />
            </div>

            <TextField
              type={"text"}
              name={"productName"}
              placeholder={t("addRequest.product")}
            />
            <TextField
              type={"text"}
              name={"targetPrice"}
              placeholder={t("addRequest.targetPrice")}
            />

            <TextArea name={"note"} placeholder={t("addRequest.note")} />

            <div className=" w-1/2 m-auto">
              <SubmitButton
                text={t("addRequest.confirmRequest")}
                isSubmitting={isSubmitting}
                type="submit"
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MultipleRequestsForm;
