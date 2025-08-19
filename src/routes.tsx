import { Navigate, createBrowserRouter, replace } from "react-router";

import Home from "@/pages/Home";
import Login from "@/pages/Login";

import AlbumDetail from "./pages/AlbumDetail";
import ArtistDetail from "./pages/ArtistDetail";

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
  { path: "/artist/:id", Component: ArtistDetail },
  { path: "/album/:id", Component: AlbumDetail },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
