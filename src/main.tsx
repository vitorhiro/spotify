import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import { queryClient } from "@/api/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

import ShadcnComponents from "./components";
import { AuthProvider } from "./context/Auth";
import "./i18n";
import "./index.css";
import { router } from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <ShadcnComponents />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
