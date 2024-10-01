import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import MediaUploader from "./../../Components/FormFields/MediaUploader";
import TextField from "../../Components/FormFields/TextField";
import TextArea from "../../Components/FormFields/TextArea";
import Select from "../../Components/FormFields/Select";
import { addShipment } from "../../Utils/functions/addShipment";

const validationSchema = Yup.object({
  receivingAddress: Yup.string().required("Receiving address is required"),
  supplierAddress: Yup.string().required("Supplier address is required"),
});

const AddShipment = () => {
  const { t } = useTranslation();
  const [uploadedFile, setUploadedFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const data = new FormData();

      if (uploadedFile) {
        data.append("packingList", uploadedFile);
      }

      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          data.append(key, values[key]);
        }
      }

      const response = await addShipment(data);

      console.log("Shipment successful:", response.data);
      toast.success("Shipment successful");
      setTimeout(() => {
        navigate("/shipments");
      }, 2000);
    } catch (error) {
      console.error("Error making shipment:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="w-full md:w-1/4 text-center border-b-2 border-primary mt-4">
        <p className="text-lg md:text-2xl font-bold text-primary">
          {t("shipments.Add New Shipment")}
        </p>
      </div>

      <Formik
        initialValues={{
          note: "",
          shipmentType: "over air",
          receivingAddress: "",
          supplierAddress: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, isSubmitting }) => (
          <Form className="md:px-24 mt-10">
            <div className="flex flex-col md:flex-row items-center mb-5">
              <div className="w-full md:w-2/3 flex flex-col">
                <label className="block mb-2 text-2xl font-semibold">
                  {t("shipments.packingList")}
                </label>
                <MediaUploader
                  uploadedFile={uploadedFile}
                  setUploadedFile={setUploadedFile}
                  fileType="file"
                  accept="*/*"
                />
              </div>

              <Select
                arr={["over sea", "over air"]}
                setFieldValue={setFieldValue}
                field={"shipmentType"}
                comparisonValue={"over sea"}
                firstLabel={t("shipments.overSea")}
                secondLabel={t("shipments.overAir")}
                value={values.shipmentType}
                label={t("shipments.shipmentType")}
              />
            </div>

            <div className="flex flex-col md:flex-row mb-5">
              <TextField
                type={"text"}
                name={"receivingAddress"}
                placeholder={t("shipments.receivingAddress")}
              />
              <TextField
                type={"text"}
                name={"supplierAddress"}
                placeholder={t("shipments.supplierAddress")}
              />
            </div>

            <TextArea name={"note"} placeholder={t("shipments.note")} />

            <div className="flex flex-col md:flex-row">
              <button
                type="submit"
                className="bg-primary text-white p-4 mt-5 text-lg w-full md:w-1/2 m-auto rounded-xl block"
                disabled={isSubmitting}
              >
                {t("shipments.confirmShipment")}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddShipment;
