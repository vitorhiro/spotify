import { createBrowserRouter, replace } from "react-router";

import Home from "@/pages/Home";
import Login from "@/pages/Login";

const checkTokenLoader = () => {
  const token = localStorage.getItem("@Spotify:token");
  console.log("🚀 ~ checkTokenLoader ~ token:", token);

  if (token) {
    return replace("/home");
  }

  return null;
};

export const router = createBrowserRouter([
  {
    index: true,
    loader: checkTokenLoader,
    Component: Login,
  },
  {
    path: "/home",
    Component: Home,
  },
]);
