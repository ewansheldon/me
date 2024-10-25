import React from "react";
import { createRoot } from "react-dom/client";
import WalkingSkeleton from "./pages/WalkingSkeleton";

// const WalkingSkeleton = () => {
//   return <h1>ewan's walking skeleton</h1>;
// };

// Use traditional DOM manipulation to create a root element for React
document.body.innerHTML = '<div id="app"></div>';

// Create a root element for React
const app = createRoot(document.getElementById("app")!);
// Render our WalkingSkeleton component
app.render(
  <>
    <p>{window.location.pathname}</p>
    <WalkingSkeleton />
  </>
);
