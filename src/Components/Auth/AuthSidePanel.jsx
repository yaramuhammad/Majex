import React from "react";

const AuthSidePanel = () => {
  return (
    <div className="hidden md:block w-1/2">
      <div className="fixed top-0 bottom-0 left-0 rtl:left-auto rtl:right-0 w-full md:w-1/2">
        <div className="absolute inset-0">
          <img
            src={require("../../assets/images 1.png")}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center items-center min-h-screen">
          <img
            src={require("../../assets/logo PNG-01 1.png")}
            alt="Majex International"
            className="w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthSidePanel;
