import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const MediaUploader = ({
  uploadedFile,
  setUploadedFile,
  fileType = "image",
  accept = "image/*",
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const { t } = useTranslation();

  const handleFileUpload = (file) => {
    if (file) {
      if (fileType === "image") {
        const reader = new FileReader();
        reader.onloadend = () => {
          setUploadedFile(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setUploadedFile(file);
      }
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];
    handleFileUpload(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    handleFileUpload(file);
  };

  const handleClearFile = () => {
    setUploadedFile(null);
  };

  return (
    <div
      className={`relative w-full md:w-52 h-40 border-dashed border-2 rounded-lg flex flex-col justify-center items-center bg-white ${
        isDragging ? "border-blue-500" : "border-gray-300"
      }`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {uploadedFile ? (
        fileType === "image" ? (
          <>
            <img
              src={uploadedFile}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              type="button"
              className="absolute top-0 right-0 text-red-500 p-3"
              onClick={handleClearFile}
            >
              X
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-sm">{uploadedFile.name}</p>
            <button
              type="button"
              onClick={handleClearFile}
              className="text-red-500 mt-2"
            >
              {"Clear"}
            </button>
          </div>
        )
      ) : (
        <span>
          {fileType === "image"
            ? t("addRequest.dropImageOr")
            : t("addRequest.dropFileOr")}{" "}
          <label htmlFor="fileUpload" className="text-primary cursor-pointer">
            {t("addRequest.browse")}
          </label>
        </span>
      )}
      <input
        id="fileUpload"
        type="file"
        accept={accept}
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default MediaUploader;
