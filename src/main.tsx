import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./globals.scss";
import router from "./libs/router";
import { NationContextProvider } from "./contexts/Nations";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NationContextProvider>
      <RouterProvider router={router} />
    </NationContextProvider>
  </React.StrictMode>
);
