import axios from "axios";

export async function getWarehouse(setWarehouseData, setUserID, setLoading) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/warehouse/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Fetched warehouse data:", response.data);
    setUserID(response.data.userId);
    setWarehouseData(response.data.warehouses[0]);
    setLoading(false);
  } catch (error) {
    console.error("Error fetching warehouse data:", error);
    setLoading(false);
  }
}
