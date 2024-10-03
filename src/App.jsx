import HomePage from "./Pages/Home/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getI18n } from "react-i18next";
import AuthPage from "./Pages/Auth/Authpage";
import { Toaster } from "react-hot-toast";
import Profile from "./Pages/Profile/Profile";
import Layout from "./Components/Layout/Layout";
import Requests from "./Pages/Requests/Requests";
import AddRequest from "./Pages/Requests/AddRequest";
import Warehouse from "./Pages/Warehouse/Warehouse";
import LCL from "./Pages/LCL/LCL";
import FCL from "./Pages/FCL/FCL";
import Shipments from "./Pages/Shipments/Shipments";
import AddShipment from "./Pages/Shipments/AddShipment";
import OurServices from "./Pages/Services/Services";
import Shop from "./Pages/Shop/Shop";
import Contact from "./Pages/Contact/Contact";
import Product from "./Pages/Product/Product";

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
      path: "contact",
      element: <Contact />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/requests",
          element: <Requests />,
        },
        {
          path: "/requests/new",
          element: <AddRequest />,
        },
        {
          path: "/warehouse",
          element: <Warehouse />,
        },
        {
          path: "/lcl",
          element: <LCL />,
        },
        {
          path: "/fcl",
          element: <FCL />,
        },
        {
          path: "/shipments",
          element: <Shipments />,
        },
        {
          path: "/shipments/new",
          element: <AddShipment />,
        },
        {
          path: "/services",
          element: <OurServices />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/product/:productId",
          element: <Product />,
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
