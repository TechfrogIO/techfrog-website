import styled from "@emotion/styled";
import React from "react";

export interface SiteHeaderProps {
  headerText: string;
}

const SiteHeaderContainer = styled.div({
  width: "100%",
  color: "#fff",
});

const SiteHeaderText = styled.div({
  display: "flex",
  paddingBlock: ".1rem",
  paddingInline: "3rem",
});

/**
 * Stylized top website header.
 *
 * @param {string} headerText - data to display in header
 * @returns {ReactElement}
 */
export const SiteHeader = ({ headerText }: SiteHeaderProps) => (
  <SiteHeaderContainer>
    <SiteHeaderText>
      <h1>{headerText}</h1>
    </SiteHeaderText>
  </SiteHeaderContainer>
);
SiteHeader.displayName = "SiteHeader";
