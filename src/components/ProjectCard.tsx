import styled from "@emotion/styled";
import React, { ReactElement } from "react";
import { baseCardContentStyle, baseCardStyle, baseFontStyle } from "../styles/baseStyles";
import { ExternalLink, ExternalLinkProps } from "./ExternalLink";

export interface ProjectCardProps {
  toolName: string;
  projectName: string;
  projectDetails: string | ReactElement;
  toolLink?: ExternalLinkProps;
}

export interface ProjectCardDataProps extends ProjectCardProps {
  id: string;
}

const CardContentContainer = styled.div([
  baseCardContentStyle,
  baseCardStyle,
  baseFontStyle,
  {
    height: "500px",
  },
]);

const PrimaryCardHeader = styled.h3({
  marginBlockEnd: ".1rem",
});

const SubCardHeader = styled.h4({
  marginBlockEnd: ".2rem",
});

const ProjectDetails = styled.div({
  paddingBlock: ".4rem",
});

const ProjectLink = styled.li({
  marginBlockStart: "-.6rem",
  marginInlineStart: "-1.3rem",
});

/**
 * A card that shows information about a software development project.
 *
 * @param {string} toolName - name of the tool the project was developed for
 * @param {string} projectName - name of the specific aspect of the tool that was developed
 * @param {string | ReactElement} projectDetails - information on what the project involved
 * @param {ExternalLinkProps} toolLink - optional, external web link to tool
 * @returns {ReactElement}
 */
export const ProjectCard = ({ toolName, projectName, projectDetails, toolLink }: ProjectCardProps) => (
  <CardContentContainer>
    <PrimaryCardHeader>{toolName}</PrimaryCardHeader>
    <SubCardHeader>{projectName}</SubCardHeader>
    <ProjectDetails>{projectDetails}</ProjectDetails>
    {toolLink ? (
      <ul>
        <ProjectLink>
          <ExternalLink linkAddress={toolLink.linkAddress} linkText={toolLink.linkText} />
        </ProjectLink>
      </ul>
    ) : (
      <></>
    )}
  </CardContentContainer>
);
ProjectCard.displayName = "ProjectCard";
