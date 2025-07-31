import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { router } from "./constants/appConstants";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App router={router} />);
