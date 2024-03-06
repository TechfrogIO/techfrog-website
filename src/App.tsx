import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NoMatchPage } from "./pages/NoMatchPage";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" element={<HomePage />} />,
      <Route path="*" element={<NoMatchPage />} />,
    ])
  );

  return <RouterProvider router={router} />;
};
App.displayname = "App";
