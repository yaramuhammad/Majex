import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import MediaUploader from "../../Components/FormFields/MediaUploader";
import TextField from "../../Components/FormFields/TextField";
import { useTranslation, getI18n } from "react-i18next";
import Select from "../../Components/FormFields/Select";

const validationSchema = Yup.object({
  orderType: Yup.string().required("Required"),
  incomingType: Yup.string().required("Required"),
  shipperAddress: Yup.string().required("Required"),
  shipperPhone: Yup.string()
    .required("Required")
    .min(10, "Phone number must be at least 10 characters"),
  shipperArea: Yup.string().required("Required"),
  shipperDetailedAddress: Yup.string().required("Required"),
  consigneeAddress: Yup.string().required("Required"),
  consigneePhone: Yup.string()
    .required("Required")
    .min(10, "Phone number must be at least 10 characters"),
  consigneePhone2: Yup.string()
    .required("Required")
    .min(10, "Phone number must be at least 10 characters"),
  consigneeCountry: Yup.string().required("Required"),
  consigneeDetailedAddress: Yup.string().required("Required"),
  ChineseNameOfTheProduct: Yup.string().required("Required"),
  EnglishNameOfProduct: Yup.string().required("Required"),
  goods: Yup.string().required("Required"),
  weight: Yup.number().typeError("Must be a number").required("Required"),
  squaresByM3: Yup.number().typeError("Must be a number").required("Required"),
  referToUnitPriceOfWeightRange: Yup.string().required("Required"),
  receivingWarehouse: Yup.string().required("Required"),
  shippingMethod: Yup.string().required("Required"),
  cartoons: Yup.number().typeError("Must be a number").required("Required"),
  deliveryCity: Yup.string().required("Required"),
  totalWeight: Yup.number().typeError("Must be a number").required("Required"),
});

const initialFormValues = () => ({
  orderType: "traditional special line",
  incomingType: "Full Delivery",
  FBAGoods: false,
  declarationDocument: false,
  shipperAddress: "",
  shipperPhone: "",
  shipperArea: "",
  shipperDetailedAddress: "",
  consigneeAddress: "",
  consigneePhone: "",
  consigneePhone2: "",
  consigneeCountry: "",
  consigneeDetailedAddress: "",
  ChineseNameOfTheProduct: "",
  EnglishNameOfProduct: "",
  goods: "",
  weight: "",
  squaresByM3: "",
  referToUnitPriceOfWeightRange: "",
  receivingWarehouse: "",
  shippingMethod: "",
  cartoons: "",
  deliveryCity: "",
  totalWeight: "",
});

const getQueryParams = (location) => {
  const searchParams = new URLSearchParams(location.search);
  return {
    channel: searchParams.get("channel"),
    to: searchParams.get("to"),
    from: searchParams.get("from"),
  };
};

const Order = () => {
  const i18n = getI18n();
  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  const location = useLocation();
  const { channel, to, from } = getQueryParams(location);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const navigateToSend = (values) => {
    navigate("/sendorder", {
      state: {
        efficiency: channel === 'air'? '12-15 working days':'45-60 working days',
        values:values,
        channel:channel,
        from:from,
        to:to,
        uploadedFile:uploadedFile
      },
    });
  };

  return (
    <>
      <p className="mx-5 text-2xl lg:text-3xl text-custom-red my-4 font-semibold">
        Online Order
      </p>
      <Formik
        initialValues={initialFormValues()}
        onSubmit={navigateToSend}
        validationSchema={validationSchema}
      >
        {({ values, setFieldValue }) => (
          <Form className="bg-white rounded-md">
            {/*Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-b-2 p-5 border-gray-500">
              <div>
                <label htmlFor="channel" className="text-sm font-semibold">
                  Channel
                </label>
                <div className=" text-custom-red text-xl font-bold">
                  {`${to} by ${channel}`}
                </div>
              </div>

              <Select
                arr={["traditional special line", "small package"]}
                setFieldValue={setFieldValue}
                field={"orderType"}
                comparisonValue={"traditional special line"}
                firstLabel={"Traditional Special Line"}
                secondLabel={"Small Package"}
                value={values.orderType}
                label={"Order Type"}
              />

              <Select
                arr={["Full Delivery", "Partial Delivery"]}
                setFieldValue={setFieldValue}
                field={"incomingType"}
                comparisonValue={"Full Delivery"}
                firstLabel={"Full Delivery"}
                secondLabel={"Partial Delivery"}
                value={values.incomingType}
                label={"Incoming Type"}
              />

              <div>
                <label
                  htmlFor="estimatedDeliveryDate"
                  className="text-sm font-semibold"
                >
                  Estimated Delivery Date
                </label>
                <div className="text-custom-red text-xl font-bold">
                  {
                    new Date(
                      Date.now() + (channel === "air" ? 15 : 60) * 86400000
                    )
                      .toISOString()
                      .split("T")[0]
                  }
                </div>
              </div>

              <Select
                arr={[true, false]}
                setFieldValue={setFieldValue}
                field={"FBAGoods"}
                comparisonValue={true}
                firstLabel={"Yes"}
                secondLabel={"No"}
                value={values.FBAGoods}
                label={"FBAGoods"}
              />

              <Select
                arr={[true, false]}
                setFieldValue={setFieldValue}
                field={"declarationDocument"}
                comparisonValue={true}
                firstLabel={"Yes"}
                secondLabel={"No"}
                value={values.declarationDocument}
                label={"Do you need documents to declare?"}
              />
            </div>

            {/*Shipper */}
            <h3 className="text-xl font-bold text-custom-red my-5">Shipper</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-b-2 p-5 border-gray-500">
              <TextField
                type={"text"}
                name={"shipperAddress"}
                placeholder={t("Shipper's Address")}
                currentLanguage={currentLanguage}
                label={t("Shipper's Address")}
              />
              <TextField
                type={"text"}
                name={"shipperPhone"}
                placeholder={t("Shipper's Phone")}
                currentLanguage={currentLanguage}
                label={t("Shipper's Phone")}
              />
              <TextField
                type={"text"}
                name={"shipperArea"}
                placeholder={t("Shipper's Area")}
                currentLanguage={currentLanguage}
                label={t("Shipper's Area")}
              />
              <TextField
                type={"text"}
                name={"shipperDetailedAddress"}
                placeholder={t("Detailed Address")}
                currentLanguage={currentLanguage}
                label={t("Detailed Address")}
              />
            </div>

            {/*Consignee */}
            <h3 className="text-xl font-bold text-custom-red my-5">
              The Consignee
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-b-2 p-5 border-gray-500">
              <TextField
                type={"text"}
                name={"consigneeAddress"}
                placeholder={t("Consignee Address")}
                currentLanguage={currentLanguage}
                label={t("Consignee Address")}
              />
              <TextField
                type={"text"}
                name={"consigneePhone"}
                placeholder={t("Consignee's Phone")}
                currentLanguage={currentLanguage}
                label={t("Consignee's Phone")}
              />
              <TextField
                type={"text"}
                name={"consigneePhone2"}
                placeholder={t("Consignee's Phone2")}
                currentLanguage={currentLanguage}
                label={t("Consignee's Phone2")}
              />
              <TextField
                type={"text"}
                name={"consigneeCountry"}
                placeholder={t("Consignee's Country")}
                currentLanguage={currentLanguage}
                label={t("Consignee's Country")}
              />
              <TextField
                type={"text"}
                name={"consigneeDetailedAddress"}
                placeholder={t("Consignee's Detailed Address")}
                currentLanguage={currentLanguage}
                label={t("Consignee's Detailed Address")}
              />
            </div>

            {/*Product */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-custom-red">Product</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-b-2 p-5 border-gray-500">
                <TextField
                  type={"text"}
                  name={"ChineseNameOfTheProduct"}
                  placeholder={t("Chinese Name of the Product")}
                  currentLanguage={currentLanguage}
                  label={t("Chinese Name of the Product")}
                />
                <TextField
                  type={"text"}
                  name={"EnglishNameOfProduct"}
                  placeholder={t("English Name of Product")}
                  currentLanguage={currentLanguage}
                  label={t("English Name of Product")}
                />
                <TextField
                  type={"text"}
                  name={"goods"}
                  placeholder={t("Goods")}
                  currentLanguage={currentLanguage}
                  label={t("Goods")}
                />
                <TextField
                  type={"text"}
                  name={"referToUnitPriceOfWeightRange"}
                  placeholder={t("Refer to Unit Price of Weight Range")}
                  currentLanguage={currentLanguage}
                  label={t("Refer to Unit Price of Weight Range")}
                />
              </div>
            </div>
            {/*Cargo*/}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-custom-red">Cargo Info</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-b-2 p-5 border-gray-500">
                <TextField
                  type={"text"}
                  name={"weight"}
                  placeholder={t("Weight")}
                  currentLanguage={currentLanguage}
                  label={t("Weight")}
                />
                <TextField
                  type={"text"}
                  name={"squaresByM3"}
                  placeholder={t("Squares By M^3")}
                  currentLanguage={currentLanguage}
                  label={t("Squares By M^3")}
                />
                <TextField
                  type={"text"}
                  name={"cartoons"}
                  placeholder={t("Cartoons")}
                  currentLanguage={currentLanguage}
                  label={t("Cartoons")}
                />
                <TextField
                  type={"text"}
                  name={"deliveryCity"}
                  placeholder={t("Delivery City")}
                  currentLanguage={currentLanguage}
                  label={t("Delivery City")}
                />
                <TextField
                  type={"text"}
                  name={"totalWeight"}
                  placeholder={t("Total Weight")}
                  currentLanguage={currentLanguage}
                  label={t("Total Weight")}
                />
              </div>
            </div>
            {/*Images*/}
            <h3 className="text-xl font-bold text-custom-red my-5">
              Uploading Files
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
              <div className="col-span-4">
                <label className="text-sm font-semibold mb-2 block">
                  Packing List
                </label>
                <MediaUploader
                  uploadedFile={uploadedFile}
                  setUploadedFile={setUploadedFile}
                  fileType="file"
                  accept="*/*"
                />
                <div className=" text-red-500 text-sm">{error}</div>
              </div>
              <TextField
                type={"text"}
                name={"receivingWarehouse"}
                placeholder={t("Receiving Warehouse")}
                currentLanguage={currentLanguage}
                label={t("Receiving Warehouse")}
              />
              <TextField
                type={"text"}
                name={"shippingMethod"}
                placeholder={t("Shipping Method")}
                currentLanguage={currentLanguage}
                label={t("Shipping Method")}
              />
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="w-1/2 p-2 bg-custom-red text-white font-semibold rounded-xl"
                onClick={() => {
                  if (!uploadedFile) {
                    setError("Packing List is Required");
                  }
                }}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Order;
