import axios from "axios";

export const Login = async (values,setErrors) => {
  try {
    const response = await axios.post(
      "https://logistics-solution-wheat.vercel.app/login",
      values,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.data;
    localStorage.setItem("token", data.token);
    return response;
  } catch (error) {
    if (error.response && error.response.data) {
      setErrors(error.response.data.errors);
    }
    console.log(error);
  }
};
