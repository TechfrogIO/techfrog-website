import { render, screen } from "@testing-library/react";
import React from "react";
import { EducationCard, EducationCardProps } from "./EducationCard";

describe("EducationCard", () => {
  let props: EducationCardProps;

  beforeEach(() => {
    props = {
      college: "College",
      degree: "degree",
      major: "major",
      graduation: "Month Year",
    };
  });

  it("renders all data excluding minor", () => {
    render(<EducationCard {...props} />);
    expect(screen.getAllByText(props.college)).toHaveLength(1);
    expect(screen.getAllByText(props.degree)).toHaveLength(1);
    expect(screen.getAllByText(props.major)).toHaveLength(1);
    expect(screen.getAllByText(props.graduation)).toHaveLength(1);
  });

  it("renders all data including minor", () => {
    props.minor = "minor";

    render(<EducationCard {...props} />);
    expect(screen.getAllByText(props.college)).toHaveLength(1);
    expect(screen.getAllByText(props.degree)).toHaveLength(1);
    expect(screen.getAllByText(props.major)).toHaveLength(1);
    expect(screen.getAllByText(props.graduation)).toHaveLength(1);
    expect(screen.getAllByText(props.minor)).toHaveLength(1);
  });
});
