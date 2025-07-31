import { render, screen } from "@testing-library/react";
import React from "react";
import { InfoPageStyle } from "../constants/appConstants";
import { COMPANY_HEADING, COMPANY_NAME, RESUME_HEADING, RESUME_NAME } from "../constants/textConstants";
import { InfoPage, InfoPageProps } from "./InfoPage";

describe("InfoPage", () => {
  let props: InfoPageProps;

  beforeEach(() => {
    props = {
      infoPageStyle: InfoPageStyle.CompanyInfo,
      detailsList: [
        {
          id: "123",
          content: "test info",
        },
      ],
      projectCardData: [
        {
          id: "456",
          toolName: "tool",
          projectName: "project",
          projectDetails: "details",
        },
      ],
      educationCardData: [
        {
          id: "1",
          college: "College",
          degree: "degree",
          major: "major",
          graduation: "Month Year",
        },
      ],
    };
  });

  it("renders company name and heading if style CompanyInfo", () => {
    render(<InfoPage {...props} />);
    expect(screen.getAllByText(COMPANY_NAME)).toHaveLength(1);
    expect(screen.getAllByText(COMPANY_HEADING)).toHaveLength(1);
  });

  it("renders shared props if style CompanyInfo", () => {
    render(<InfoPage {...props} />);
    expect(screen.getAllByText("test info")).toHaveLength(1);
    expect(screen.getAllByText("tool")).toHaveLength(1);
    expect(screen.getAllByText("project")).toHaveLength(1);
    expect(screen.getAllByText("details")).toHaveLength(1);
  });

  it("renders without educationCardData if style CompanyInfo", () => {
    render(<InfoPage {...props} />);
    expect(screen.queryByText("College")).toBeNull();
    expect(screen.queryByText("degree")).toBeNull();
    expect(screen.queryByText("major")).toBeNull();
    expect(screen.queryByText("Month Year")).toBeNull();
  });

  it("renders resume name and heading if style Resume", () => {
    props.infoPageStyle = InfoPageStyle.Resume;

    render(<InfoPage {...props} />);
    expect(screen.getAllByText(RESUME_NAME)).toHaveLength(1);
    expect(screen.getAllByText(RESUME_HEADING)).toHaveLength(1);
  });

  it("renders shared props if style Resume", () => {
    props.infoPageStyle = InfoPageStyle.Resume;

    render(<InfoPage {...props} />);
    expect(screen.getAllByText("test info")).toHaveLength(1);
    expect(screen.getAllByText("tool")).toHaveLength(1);
    expect(screen.getAllByText("project")).toHaveLength(1);
    expect(screen.getAllByText("details")).toHaveLength(1);
  });

  it("renders with educationCardData if style Resume", () => {
    props.infoPageStyle = InfoPageStyle.Resume;

    render(<InfoPage {...props} />);
    expect(screen.getAllByText("College")).toHaveLength(1);
    expect(screen.getAllByText("degree")).toHaveLength(1);
    expect(screen.getAllByText("major")).toHaveLength(1);
    expect(screen.getAllByText("Month Year")).toHaveLength(1);
  });

  it("renders with project cards if optional data is in props", () => {
    render(<InfoPage {...props} />);
    expect(screen.getAllByText("Past Projects")).toHaveLength(1);
  });

  it("renders without project cards if optional data is not in props", () => {
    props.projectCardData = undefined;

    render(<InfoPage {...props} />);
    expect(screen.queryByText("Past Projects")).toBeNull();
  });
});
