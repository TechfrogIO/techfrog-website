import styled from "@emotion/styled";
import React, { ReactElement, ReactNode } from "react";
import { COMPANY_NAME, COPY_START_DATE } from "../constants/textConstants";
import { Footer } from "./Footer";

export interface PageProps {
  children: ReactElement[];
}

const PageContainer = styled.div({
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#003366",
});

/**
 * Top level component for a specific type of site page (ie. InfoPage), sets overall page style and adds a footer.
 *
 * @param {ReactElement[]} children - content elements
 * @returns {ReactElement[]}
 */
export const Page = ({ children }: PageProps) => (
  <PageContainer>
    {children.length ? children.map((child: ReactNode, i) => <div key={i}>{child}</div>) : <></>}
    <Footer company={COMPANY_NAME} startCopyDate={COPY_START_DATE} />
  </PageContainer>
);
Page.displayName = "PageContainer";
