import styled from "@emotion/styled";
import React, { ReactElement } from "react";
import { EducationCard, EducationCardDataProps } from "../components/EducationCard";
import { Page } from "../components/Page";
import { ProjectCard, ProjectCardDataProps } from "../components/ProjectCard";
import { SiteHeader } from "../components/SiteHeader";
import { InfoPageStyle } from "../constants/appConstants";
import { COMPANY_HEADING, COMPANY_NAME, RESUME_HEADING, RESUME_NAME } from "../constants/textConstants";
import { baseCardStyle, baseFontStyle } from "../styles/baseStyles";

export interface DetailsListProps {
  id: string;
  content: string | ReactElement;
}

export interface InfoPageProps {
  infoPageStyle: InfoPageStyle;
  detailsList: DetailsListProps[];
  projectCardData?: ProjectCardDataProps[];
  educationCardData?: EducationCardDataProps[];
}

const ContentContainer = styled.div(baseFontStyle, {
  minHeight: "70vh",
  backgroundColor: "#e6e6e6",
  paddingBlock: "1rem",
  paddingInline: "3rem",
  marginBlock: 0,
  marginInline: 0,
});

const DetailsContainer = styled.div([
  baseCardStyle,
  baseFontStyle,
  {
    minWidth: "200px",
    paddingBlock: "1rem",
    paddingInline: ".5rem 1.5rem",
    marginBottom: "3rem",
  },
]);

/**
 * Allows dynamically shifting cards into less columns on narrower screens.
 */
const CardsContainer = styled.div({
  display: "flex",
  flexWrap: "wrap",
});

/**
 * A site page that is used to display information about a company or person.
 *
 * @param {InfoPageStyle} infoPageStyle - Type of info page, determines which content fields are available
 * @param {DetailsListProps[]} detailsList - list of details to display in top info box (minimum required data for page)
 * @param {ProjectCardDataProps[]} projectCards - optional, list of projects
 * @param {EducationCardDataProps[]} educationCardData - optional, list of education history
 * @returns {ReactElement}
 */
export const InfoPage = ({ infoPageStyle, detailsList, projectCardData, educationCardData }: InfoPageProps) => {
  const pageData =
    infoPageStyle === InfoPageStyle.CompanyInfo
      ? { name: COMPANY_NAME, heading: COMPANY_HEADING }
      : { name: RESUME_NAME, heading: RESUME_HEADING };

  return (
    <Page>
      <SiteHeader headerText={pageData.name} />
      <ContentContainer>
        <div>
          <h2>{pageData.heading}</h2>
          <DetailsContainer>
            <ul>
              {detailsList.map((detail) => (
                <li style={{ margin: "0 0 1.5rem" }} key={detail.id}>
                  {detail.content}
                </li>
              ))}
            </ul>
          </DetailsContainer>
        </div>

        {projectCardData ? (
          <div>
            <h2>Past Projects</h2>
            <CardsContainer>
              {projectCardData.map((projectData) => (
                <ProjectCard
                  key={projectData.id}
                  toolName={projectData.toolName}
                  projectName={projectData.projectName}
                  projectDetails={projectData.projectDetails}
                  toolLink={projectData.toolLink}
                />
              ))}
            </CardsContainer>
          </div>
        ) : (
          <></>
        )}

        {infoPageStyle === InfoPageStyle.Resume && educationCardData ? (
          <div>
            <h2>Education</h2>
            <CardsContainer>
              {educationCardData.map((educationData) => (
                <EducationCard
                  key={educationData.id}
                  college={educationData.college}
                  degree={educationData.degree}
                  major={educationData.major}
                  minor={educationData.minor}
                  graduation={educationData.graduation}
                />
              ))}
            </CardsContainer>
          </div>
        ) : (
          <></>
        )}
      </ContentContainer>
    </Page>
  );
};
InfoPage.displayName = "InfoPage";
