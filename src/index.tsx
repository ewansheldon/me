import React from "react";
import { createRoot } from "react-dom/client";
import WalkingSkeleton from "./pages/WalkingSkeleton";
import Other from "./pages/Other";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/other" element={<Other />} />
      <Route path="*" element={<WalkingSkeleton />} />
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
