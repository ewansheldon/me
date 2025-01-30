import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<Home />} />
    </>
  )
);

document.body.innerHTML = '<div id="app"></div>';

const app = createRoot(document.getElementById("app")!);
app.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
