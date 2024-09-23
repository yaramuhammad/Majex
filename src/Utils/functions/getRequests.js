import axios from "axios";

export const getRequests = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://logistics-solution-wheat.vercel.app/api/user/me",
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