import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import TextField from "../FormFields/TextField";
import { Formik, Form } from "formik";
import SubmitButton from "../FormFields/SubmitButton";
import { Login } from "../../Utils/functions/Login";
import toast from "react-hot-toast";

const LoginForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogin = async (values, { setErrors }) => {
    try {
      const response = await Login(values, setErrors);
      if (response) {
        toast.success(t("auth.Logged in Successfully"));
        const intendedRoute = sessionStorage.getItem("intendedRoute");
        sessionStorage.removeItem("intendedRoute");
        setTimeout(() => {
          navigate(intendedRoute || "/");
        }, 2000);
      }
    } catch (error) {
      toast.error(t("auth.An error occurred. Please try again."));
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email(t("auth.Invalid email address"))
          .required(t("auth.Email is required")),
        password: Yup.string()
          .min(8, t("auth.Password must be at least 8 characters"))
          .required(t("auth.Password is required")),
      })}
      onSubmit={handleLogin}
    >
      {({ isSubmitting }) => (
        <Form className="mt-8">
          <TextField type="email" name="email" placeholder={t("auth.email")} />
          <TextField
            type="password"
            name="password"
            placeholder={t("auth.password")}
          />

          <Link to="" className="text-primary mt-4">
            {t("auth.Forgot your password?")}
          </Link>

          <SubmitButton text={t("auth.login")} isSubmitting={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
