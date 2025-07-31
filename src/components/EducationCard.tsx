import styled from "@emotion/styled";
import React from "react";
import { baseCardBorderStyle, baseCardContentStyle } from "../styles/baseStyles";

export interface EducationCardProps {
  college: string;
  degree: string;
  major: string;
  minor?: string;
  graduation: string;
}

export interface EducationCardDataProps extends EducationCardProps {
  id: string;
}

const CardContentContainer = styled.div([
  baseCardContentStyle,
  baseCardBorderStyle,
  {
    height: "160px",
  },
]);

const DegreeListItem = styled.li({
  margin: "0 0 .5rem",
});

/**
 * A card that shows information about a college degree.
 *
 * @param {string} college - name of college attended
 * @param {string} degree - type of degree
 * @param {string} major - degree subject
 * @param {string} minor - optional, secondary degree subject
 * @param {string} graduation - month and year of graduation
 * @returns {ReactElement}
 */
export const EducationCard = ({ college, degree, major, minor, graduation }: EducationCardProps) => (
  <CardContentContainer>
    <strong>{college}</strong>
    <ul>
      <DegreeListItem>{degree}</DegreeListItem>
      <DegreeListItem>
        <i>Major:</i> {major}
      </DegreeListItem>
      {minor ? (
        <DegreeListItem>
          <i>Minor:</i> {minor}
        </DegreeListItem>
      ) : (
        <></>
      )}
      <DegreeListItem>{graduation}</DegreeListItem>
    </ul>
  </CardContentContainer>
);
EducationCard.displayName = "EducationCard";
