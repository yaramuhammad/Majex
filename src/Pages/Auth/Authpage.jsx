import React, { useState } from "react";
import LoginForm from "../../Components/Auth/LoginForm";
import RegistrationForm from "../../Components/Auth/RegisterForm";
import AuthSidePanel from "./../../Components/Auth/AuthSidePanel";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import LanguageDropdown from "../../Components/Home/LangDropdown";

const AuthPage = () => {
  const { t } = useTranslation();
  const { type } = useParams();
  const [activeTab, setActiveTab] = useState(type);

  return (
    <div className="flex flex-col md:flex-row h-screen py-10 overflow-y-auto">
      <div className="fixed top-0 left-0 md:left-1/2 md:rtl:right-1/2 md:rtl:left-auto p-5 z-50 bg-white md:w-1/2 shadow w-full flex justify-end xl:bg-transparent xl:shadow-none">
        <LanguageDropdown dir="down" />
      </div>
      <AuthSidePanel />
      <div className="w-full md:w-1/2 flex justify-center items-center bg-white">
        <div
          className={`w-11/12 md:w-3/4 py-16 ${
            activeTab === "login" ? "md:py-16 " : "md:pb-16 md:pt-96 xl:pt-64"
          }`}
        >
          <h2 className="text-xl md:text-2xl font-bold text-center my-6 md:mb-12">
            {t("auth.heyThere")}
          </h2>
          <div className="flex justify-center md:justify-evenly mt-4">
            <button
              onClick={() => setActiveTab("login")}
              className={`${
                activeTab === "login"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-600 border-b-2 border-black"
              } px-4 py-1`}
            >
              {t("auth.login")}
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`${
                activeTab === "register"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-600 border-b-2 border-black"
              } px-4 py-1`}
            >
              {t("auth.register")}
            </button>
          </div>
          <div className="mt-8">
            {activeTab === "login" ? <LoginForm /> : <RegistrationForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
