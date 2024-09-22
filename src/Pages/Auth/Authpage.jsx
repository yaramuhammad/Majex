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
    <div className="flex h-screen py-10 overflow-y-auto">
      <div className="fixed top-0 right-0 rtl:right-auto rtl:left-0 p-5">
        <LanguageDropdown />
      </div>
      <AuthSidePanel />
      <div className="w-1/2 flex justify-center items-center bg-white">
        <div className="w-3/4 py-44 pb-16">
          <h2 className="text-2xl font-bold text-center mb-12">
            {t("auth.heyThere")}
          </h2>
          <div className="flex justify-evenly mt-4">
            <button
              onClick={() => setActiveTab("login")}
              className={`${
                activeTab === "login"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-600 border-b-2 border-black"
              } ml-8`}
            >
              {t("auth.login")}
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`${
                activeTab === "register"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-600 border-b-2 border-black"
              } ml-8`}
            >
              {t("auth.register")}
            </button>
          </div>
          {activeTab === "login" ? <LoginForm /> : <RegistrationForm />}{" "}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
