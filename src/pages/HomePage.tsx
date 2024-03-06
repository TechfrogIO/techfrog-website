import React from "react";
import { Footer } from "../components/Footer";
import { COMPANY, START_DATE } from "../constants/app";
import { CompanyHeader } from "../components/CompanyHeader";
import { Page } from "../components/Page";
import { Content } from "../components/Content";

export const HomePage = () => (
  <Page>
    <CompanyHeader company={COMPANY}>
      <h1>Page Not Found</h1>
    </CompanyHeader>

    <Content>
      <ul>
        <li>Freelance full-stack engineer with enterprise-level industry experience</li>
        <li>
          Specializes in Front-end Engineering (React-based web applications, web accessibility, user-friendly UX, build
          from UX mock-ups) with the applications backed by AWS services
        </li>
        <li>
          LLC incorporated in Arizona, US with Professional Liability (E&O) insurance through biBERK [Parent org:
          Berkshire Hathaway]
        </li>
      </ul>
    </Content>

    <Footer company={COMPANY} startDate={START_DATE} />
  </Page>
);
HomePage.displayName = "HomePage";
