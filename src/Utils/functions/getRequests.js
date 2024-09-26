import axios from "axios";

export const getRequests = async () => {
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
    return response.data.requests;
  } catch (error) {
    console.error("Error fetching requests:", error);
  }
};