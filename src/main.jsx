import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import CocktailPage from "./components/CocktailPage.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/the-black-bar",
    element: <App />,
    errorElement: <h1 className="text-center">Wrong Page, sucker</h1>,
  },
  {
    path: "cocktails/:cocktailId",
    element: <CocktailPage />,
    errorElement: <h1 className="text-center">No cocktails called THAT</h1>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
