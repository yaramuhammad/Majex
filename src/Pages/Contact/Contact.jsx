import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../Components/Home/Footer";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex flex-col lg:flex-row ">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-5">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-5xl font-bold mb-8">{t("contact.Contact Us")}</h2>
              <div className="flex flex-col space-y-4 w-full justify-center items-center">
                <button className="w-3/4 text-xl font-medium flex items-center justify-start pl-24 my-10 bg-primary text-white px-4 py-3 rounded-md">
                  <img
                    src={require("../../assets/wechat.png")}
                    alt="wechat"
                    className="w-1/12 mr-8"
                  />
                  {t("contact.Wechat")}
                </button>
                <button className="w-3/4 text-xl font-medium flex items-center justify-start pl-24 bg-primary text-white px-4 py-3 rounded-md">
                  <img
                    src={require("../../assets/WhatsApp.png")}
                    alt="wechat"
                    className="w-1/12 mr-8"
                  />
                  {t("contact.Whatsapp")}
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center p-5">
            <img
              src={require("../../assets/Service 24_7-pana 1.png")}
              alt="24/7 Service"
              className="w-full max-w-lg"
            />
          </div>
        </div>
        <div className="bg-black text-white p-5">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
