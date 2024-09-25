import axios from "axios";

export const CreateMultipleRequests = async (values, uploadedFile) => {
  try {
    const data = new FormData();
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        data.append(key, values[key]);
      }
    }
    if (uploadedFile) {
      data.append("media", uploadedFile);
    }
    data.delete("image");
    data.append("requestType", "multiple");

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/request/`,
      data,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      }
    );

    console.log("Request successful:", response.data);
    return response;
  } catch (error) {
    console.error("Error making request:", error);
    toast.error("Error making request");
  }
};
