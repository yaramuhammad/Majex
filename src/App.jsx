import HomePage from "./Pages/Home/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getI18n } from "react-i18next";

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
  ]);

  return <RouterProvider router={router} />;
}
