import axios from "axios";

const getToken = () => localStorage.getItem("token");

const createFormData = async (values, uploadedImage) => {
  const formData = new FormData();
  const defaultValues = {
    requestType: "single",
    status: "pending",
    note: "",
  };

  const data = { ...defaultValues, ...values };
  Object.keys(data).forEach((key) => formData.append(key, data[key]));

  if (uploadedImage) {
    const blob = await fetch(uploadedImage).then((res) => res.blob());
    const file = new File([blob], "image.png", { type: "image/png" });
    formData.append("media", file);
  }

  return formData;
};

export const CreateRequest = async (values, uploadedImage) => {
  try {
    const token = getToken();
    const formData = await createFormData(values, uploadedImage);

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/request/`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      }
    );

    console.log("Request successful:", response.data);
    return response;
  } catch (error) {
    console.error("Error making request:", error);
  }
};
