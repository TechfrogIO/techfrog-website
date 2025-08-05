import React from "react";
import { Route, Routes } from "react-router-dom";
import { InfoPageStyle } from "./constants/appConstants";
import { COMPANY_DETAILS, EDUCATION_DATA, PROJECT_CARD_DATA, RESUME_DETAILS } from "./constants/textConstants";
import { InfoPage } from "./pages/InfoPage";
import { NoMatchPage } from "./pages/NoMatchPage";

export const App = () => (
  <>
    <Routes>
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
      />
      <Route
        path="/"
        element={
          <InfoPage
            infoPageStyle={InfoPageStyle.CompanyInfo}
            detailsList={COMPANY_DETAILS}
            projectCardData={PROJECT_CARD_DATA}
          />
        }
      />
      <Route path="*" element={<NoMatchPage />} />
    </Routes>
  </>
);
