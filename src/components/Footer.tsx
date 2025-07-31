import styled from "@emotion/styled";
import React from "react";

export interface FooterProps {
  company: string;
  startCopyDate: string;
  endCopyDate?: string;
}

const FooterText = styled.div({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  fontSize: "1rem",
  color: "#fff",
  paddingBlock: "2rem 3rem",
});

/**
 * Stylized website footer.
 *
 * @param {string} company - data to display in header
 * @param {string} startCopyDate - start of copyrite period
 * @param {string} endCopyDate - optional, end of copyrite period
 * @returns {ReactElement}
 */
export const Footer = ({ company, startCopyDate, endCopyDate }: FooterProps) => {
  const copyrightText = `© ${startCopyDate}${endCopyDate ? `-${endCopyDate}` : ""} ${company}. All rights reserved.`;

  return (
    <FooterText>
      <span>{copyrightText}</span>
    </FooterText>
  );
};
Footer.displayName = "Footer";
