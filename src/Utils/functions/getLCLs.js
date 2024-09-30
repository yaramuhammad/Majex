import axios from "axios";

export async function getLCLs() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/lcl/`);
    console.log(response.data.lcls);
    return response.data.lcls;
  } catch (e) {
    console.log(e);
  }
}
