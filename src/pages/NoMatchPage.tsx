import styled from "@emotion/styled";
import React from "react";

const NoMatchPageContainer = styled.header({
  backgroundColor: "#282c34",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
});

/**
 * Displays a message indicating the requested page is not available.
 *
 * @returns {ReactElement}
 */
export const NoMatchPage = () => (
  <NoMatchPageContainer>
    <h1>Page Not Found</h1>
  </NoMatchPageContainer>
);
NoMatchPage.displayName = "NoMatchPage";
