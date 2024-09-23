import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loading from "../../Components/Layout/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faUser } from "@fortawesome/free-regular-svg-icons";
import { getProfile } from "../../Utils/functions/getProfile";

function Profile() {
  const { t } = useTranslation();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    whatsappNumber: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProfile();
        setUserData({
          name: data.name || "",
          email: data.email || "",
          password: "**********",
          mobileNumber: data.mobileNumber || "",
          whatsappNumber: data.whatsappNumber || "",
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:space-x-4 py-4 rtl:lg:space-x-reverse">
        <div className="mb-4 lg:mb-0">
          <FontAwesomeIcon icon={faUser} className="text-3xl" />
        </div>
        <div>
          <span className="text-gray-800 font-bold text-2xl lg:text-3xl">
            {userData.name}
          </span>
        </div>
      </div>
      <form className="space-y-4">
        {[
          {
            label: t("profile.name"),
            value: userData.name,
            type: "text",
            placeholder: t("profile.enterName"),
          },
          {
            label: t("profile.email"),
            value: userData.email,
            type: "email",
            placeholder: t("profile.enterEmail"),
          },
          {
            label: t("profile.password"),
            value: userData.password,
            type: "password",
            placeholder: t("profile.enterPassword"),
          },
          {
            label: t("profile.mobileNumber"),
            value: userData.mobileNumber,
            type: "text",
            placeholder: t("profile.enterMobileNumber"),
          },
          {
            label: t("profile.whatsappNumber"),
            value: userData.whatsappNumber,
            type: "text",
            placeholder: t("profile.enterWhatsappNumber"),
          },
        ].map((field, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <label className="text-primary font-semibold text-left rtl:text-right">
              {field.label}
            </label>
            <div className="relative">
              <input
                type={field.type}
                value={field.value}
                placeholder={field.placeholder}
                className="border border-gray-300 rounded-lg py-3 w-full bg-gray-100  ltr:pl-4 rtl:pr-4"
                readOnly
              />
              <Link
                to="/edit"
                className="absolute top-1/2 transform -translate-y-1/2  rtl:left-3  ltr:right-3"
              >
                <i className="fa-regular fa-pen-to-square w-6 h-6 cursor-pointer text-primary fa-xl"></i>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className=" w-6 h-6 cursor-pointer text-primary text-2xl"
                />
              </Link>
            </div>
          </div>
        ))}
      </form>
    </>
  );
}

export default Profile;
