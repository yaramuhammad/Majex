import axios from "axios";

export const Register = async (values, setErrors) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/register`,
      values,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.data;
    localStorage.setItem("token", data.data.token);
    console.log(response.data.data);

    return response;
  } catch (error) {
    if (error.response && error.response.data) {
      console.log(error.response.data.errors);
      setErrors(error.response.data.errors);
    }
    console.log(error);
  }
};
