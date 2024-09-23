import HomePage from "./Pages/Home/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getI18n } from "react-i18next";
import AuthPage from "./Pages/Auth/Authpage";
import { Toaster } from "react-hot-toast";
import Profile from "./Pages/Profile/Profile";
import Layout from "./Components/Layout/Layout";

export default function App() {
  const i18n = getI18n();
  const currentLanguage = i18n.language;
  document.documentElement.setAttribute(
    "dir",
    currentLanguage === "ar" ? "rtl" : "ltr"
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/authentication/:type",
      element: <AuthPage />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "white",
            },
            style: {
              background: "green",
              color: "#fff",
            },
          },
          error: {
            duration: 3000,
            theme: {
              primary: "red",
              secondary: "white",
            },
            style: {
              background: "red",
              color: "#fff",
            },
          },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}
