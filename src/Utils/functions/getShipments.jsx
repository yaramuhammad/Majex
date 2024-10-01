import axios from "axios";

export const getShipments = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/user/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.shipments);
    return response.data.shipments;
  } catch (error) {
    console.error("Error fetching requests:", error);
  }
};
