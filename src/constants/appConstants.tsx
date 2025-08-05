import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { InfoPage } from "../pages/InfoPage";
import { NoMatchPage } from "../pages/NoMatchPage";
import { COMPANY_DETAILS, EDUCATION_DATA, PROJECT_CARD_DATA, RESUME_DETAILS } from "./textConstants";

export enum InfoPageStyle {
  CompanyInfo = "COMPANY_DETAILS",
  Resume = "RESUME",
}

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route
      path="/resume"
      element={
        <InfoPage
          infoPageStyle={InfoPageStyle.Resume}
          detailsList={RESUME_DETAILS}
          projectCardData={PROJECT_CARD_DATA}
          educationCardData={EDUCATION_DATA}
        />
      }
    />,
    <Route
      path="/"
      element={
        <InfoPage
          infoPageStyle={InfoPageStyle.CompanyInfo}
          detailsList={COMPANY_DETAILS}
          projectCardData={PROJECT_CARD_DATA}
        />
      }
    />,
    <Route path="*" element={<NoMatchPage />} />,
  ])
);
