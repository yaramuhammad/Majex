import axios from "axios";

export async function getFCLs() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/fcl/`);
    return response.data.fcl;
  } catch (e) {
    console.log(e);
  }
}
