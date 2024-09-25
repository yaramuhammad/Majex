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
import { CreateRequest } from "../../Utils/functions/CreateRequest";

const validationSchema = Yup.object({
  productName: Yup.string().required("Product name is required"),
  quantity: Yup.number()
    .positive("Quantity must be greater than 0")
    .required("Quantity is required"),
  shipmentType: Yup.string()
    .oneOf(["over air", "over sea"], "Invalid shipment type")
    .required("Shipment type is required"),
  link: Yup.string().url("Invalid URL").required("Link is required"),
  color: Yup.string().required("Color is required"),
  targetPrice: Yup.number()
    .positive("Target price must be greater than 0")
    .required("Target price is required"),
  weight: Yup.number()
    .positive("Weight must be greater than 0")
    .required("Weight is required"),
});

export default function SingleRequestForm() {
  const { t } = useTranslation();
  const [uploadedImage, setUploadedImage] = useState(null);
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    if (!uploadedImage) {
      errors.media = "Image is required";
    }
    return errors;
  };

  const handleSubmit = async (values) => {
    try {
      const res = await CreateRequest(values, uploadedImage);
      if (res) {
        console.log("Request successful:", res.data);
        toast.success("Request successful");
        setTimeout(() => {
          navigate("/requests");
        }, 2000);
      }
    } catch (error) {
      console.error("Error making request:", error);
    }
  };

  return (
    <Formik
      initialValues={{
        productName: "",
        quantity: "",
        note: "",
        shipmentType: "over air",
        link: "",
        color: "",
        targetPrice: "",
        weight: "",
      }}
      validationSchema={validationSchema}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values, errors, isSubmitting }) => (
        <Form className="md:px-8 xl:px-24 mt-10">
          <div className="flex flex-col md:flex-row items-center mb-5">
            <div className="w-full md:w-2/3  flex flex-col">
              <label className="block mb-2 text-2xl font-semibold">
                {t("addRequest.productImage")}{" "}
                <span className="text-sm text-gray-500 font-light">
                  {t("addRequest.onlyOneImage")}
                </span>
              </label>
              <MediaUploader
                uploadedFile={uploadedImage}
                setUploadedFile={setUploadedImage}
                fileType="image"
                accept="image/*"
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

          <div className="flex flex-col md:flex-row">
            <TextField
              type={"text"}
              name={"productName"}
              placeholder={t("addRequest.product")}
            />
            <TextField
              type={"text"}
              name={"link"}
              placeholder={t("addRequest.productLink")}
            />
          </div>

          <div className="flex flex-col md:flex-row">
            <TextField
              type={"number"}
              name={"quantity"}
              placeholder={t("addRequest.quantity")}
            />
            <TextField
              type={"text"}
              name={"targetPrice"}
              placeholder={t("addRequest.targetPrice")}
            />
          </div>

          <div className="flex flex-col md:flex-row ">
            <TextField
              type={"text"}
              name={"weight"}
              placeholder={t("addRequest.weight")}
            />
            <TextField
              type={"text"}
              name={"color"}
              placeholder={t("addRequest.color")}
            />
          </div>
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
  );
}
