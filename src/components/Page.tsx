import styled from "@emotion/styled";
import React from "react";

interface PageProps {
  children: any;
}

const PageContainer = styled.div({
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "#282c34",
});

export const Page = ({ children }: PageProps) => (
  <PageContainer>{children}</PageContainer>
);
PageContainer.displayName = "PageContainer";
