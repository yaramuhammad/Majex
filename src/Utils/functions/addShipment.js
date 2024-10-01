import axios from "axios";
export async function addShipment(data) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/shipment/`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
