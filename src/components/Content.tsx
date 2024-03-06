import styled from "@emotion/styled";
import React from "react";

interface ContentProps {
  children: any;
}

const ContentContainer = styled.div({
  minHeight: "70vh",
  backgroundColor: "#f2f2f2",
  color: "#000",
  paddingBlock: "1rem",
  paddingInline: "1rem",
  marginBlock: 0,
  marginInline: 0,
});

export const Content = ({ children }: ContentProps) => (
  <ContentContainer>{children}</ContentContainer>
);
Content.displayName = "Content";
