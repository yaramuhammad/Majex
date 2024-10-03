import axios from "axios";

export async function getProducts() {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/product`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(res.data.products);
    return res.data.products;
  } catch (e) {
    console.log(e);
  }
}
