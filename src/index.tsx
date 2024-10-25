import React from "react";
import { createRoot } from "react-dom/client";
import WalkingSkeleton from "./pages/WalkingSkeleton";
import Other from "./pages/Other";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/other" element={<Other />} />
      <Route path="*" element={<WalkingSkeleton />} />
    </>
  )
);

document.body.innerHTML = '<div id="app"></div>';

const app = createRoot(document.getElementById("app")!);
const path = window.location.pathname;
app.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
