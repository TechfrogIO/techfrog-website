import styled from "@emotion/styled";
import React, { ReactElement } from "react";

export interface CompanyHeaderProps {
  company: string;
  children: ReactElement;
}

const CompanyHeaderContainer = styled.div({
  width: "100%",
  backgroundColor: "#282c34",
  color: "#fff",
});

const CompanyHeaderText = styled.div({
  display: "flex",
  paddingBlock: ".1rem",
  paddingInline: "1rem",
});

export const CompanyHeader = ({ company }: CompanyHeaderProps) => (
  <CompanyHeaderContainer>
    <CompanyHeaderText>
      <h1>{company}</h1>
    </CompanyHeaderText>
  </CompanyHeaderContainer>
);
CompanyHeader.displayName = "CompanyHeader";
