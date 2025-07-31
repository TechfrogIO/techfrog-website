import { Router } from "@remix-run/router";
import React from "react";
import { RouterProvider } from "react-router-dom";

export interface AppProps {
  router: Router;
}

/**
 * Container for application, utilizes React Router for navigating the app.
 *
 * @param {Router} router
 * @returns {ReactElement}
 */
export const App = ({ router }: AppProps) => {
  return <RouterProvider router={router} />;
};
App.displayname = "App";
