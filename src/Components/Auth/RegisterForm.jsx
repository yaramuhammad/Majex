import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { Formik, Form } from "formik";
import TextField from "../FormFields/TextField";
import { ErrorMessage } from "formik";
import SubmitButton from "../FormFields/SubmitButton";
import { Register } from "../../Utils/functions/Register";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleRegister = async (values, { setErrors }) => {
    try {
      const response = await Register(values, setErrors);
      if (response) {
        toast.success(t("auth.Registered Successfully"));
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      toast.error(t("auth.An error occurred. Please try again."));
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          password2: "",
          mobileNumber: "",
          whatsappNumber: "",
          termsAndConditionsAgreed: false,
          language: "english",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required(t("auth.Name is required")),
          email: Yup.string()
            .email(t("auth.Invalid email address"))
            .required(t("auth.Email is required")),
          password: Yup.string()
            .min(8, t("auth.Password must be at least 8 characters"))
            .required(t("auth.Password is required")),
          password2: Yup.string()
            .oneOf([Yup.ref("password"), null], t("auth.Passwords must match"))
            .required(t("auth.Password Confirmation is required")),
          mobileNumber: Yup.string().required(
            t("auth.Mobile number is required")
          ),
          termsAndConditionsAgreed: Yup.boolean()
            .oneOf([true], t("auth.You must accept the terms and conditions"))
            .required(t("auth.You must accept the terms and conditions")),
          language: Yup.string().required(),
        })}
        onSubmit={handleRegister}
      >
        {({ values, isSubmitting, setFieldValue }) => (
          <Form className="mt-8">
            <TextField type="text" name="name" placeholder={t("auth.name")} />
            <TextField
              type="email"
              name="email"
              placeholder={t("auth.email")}
            />
            <TextField
              type="password"
              name="password"
              placeholder={t("auth.password")}
            />
            <TextField
              type="password"
              name="password2"
              placeholder={t("auth.passwordConfirmation")}
            />
            <TextField
              type="tel"
              name="mobileNumber"
              placeholder={t("auth.mobileNumber")}
            />
            <TextField
              type="tel"
              name="whatsappNumber"
              placeholder={t("auth.whatsappNumber")}
            />

            <div className="mt-4">
              <select
                id="language"
                name="language"
                className="w-full p-2 rounded-2xl border-gray-400 focus:border-primary focus:ring-primary px-4 border-2 outline-none mb-5 md:mr-2"
                onChange={(e) => setFieldValue("language", e.target.value)}
              >
                <option value="" disabled>
                  {t("auth.Preferred Language")}
                </option>
                <option value="english">{t("auth.en")}</option>
                <option value="chinese">{t("auth.中文")}</option>
                <option value="arabic">{t("auth.ar")}</option>
              </select>
            </div>

            <div className="flex items-center">
              <label
                htmlFor="termsAndConditionsAgreed"
                className="text-gray-600 flex items-center justify-between w-full"
              >
                <p>
                  {t("auth.You agree to our")}
                  <span className="text-primary"> {t("auth.terms")}</span>{" "}
                  {t("auth.and")}
                  <span className="text-primary"> {t("auth.conditions")}</span>
                </p>
                <input
                  type="checkbox"
                  id="termsAndConditionsAgreed"
                  name="termsAndConditionsAgreed"
                  onChange={(e) =>
                    setFieldValue("termsAndConditionsAgreed", e.target.checked)
                  }
                  className="hidden"
                />
                <span
                  className={`w-4 h-4 border-2 border-gray-300 rounded mr-2 flex items-center justify-center ${
                    values.termsAndConditionsAgreed
                      ? "bg-primary border-primary"
                      : ""
                  }`}
                >
                  {values.termsAndConditionsAgreed && (
                    <FontAwesomeIcon
                      icon={faCheck}
                      className=" text-white text-xs"
                    />
                  )}
                </span>
              </label>
            </div>
            <ErrorMessage
              name="termsAndConditionsAgreed"
              component="div"
              className="text-red-500 text-xs"
            />

            <SubmitButton
              text={t("auth.register")}
              isSubmitting={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
