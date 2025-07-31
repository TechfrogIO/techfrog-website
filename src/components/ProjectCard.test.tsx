import { render, screen } from "@testing-library/react";
import React from "react";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";

describe("ProjectCard", () => {
  let props: ProjectCardProps;

  beforeEach(() => {
    props = {
      toolName: "tool",
      projectName: "project",
      projectDetails: "details",
    };
  });

  it("renders excluding tool link", () => {
    render(<ProjectCard {...props} />);
    expect(screen.getAllByText(props.toolName)).toHaveLength(1);
    expect(screen.getAllByText(props.projectName)).toHaveLength(1);
    expect(screen.getAllByText(props.projectDetails as string)).toHaveLength(1);
  });

  it("renders including tool link", () => {
    props.toolLink = {
      linkText: "text",
      linkAddress: "address",
    };

    render(<ProjectCard {...props} />);
    expect(screen.getAllByText(props.toolName)).toHaveLength(1);
    expect(screen.getAllByText(props.projectName)).toHaveLength(1);
    expect(screen.getAllByText(props.projectDetails as string)).toHaveLength(1);
    expect(screen.getAllByText(props.toolLink.linkText)).toHaveLength(1);
    expect(screen.getByRole("link", { name: props.toolLink.linkText }).getAttribute("href")).toBe(
      props.toolLink.linkAddress
    );
  });

  it("renders projectDetails when is react elements", () => {
    const TEXT = "I'm an element";
    props.projectDetails = <div>{TEXT}</div>;

    render(<ProjectCard {...props} />);
    expect(screen.getAllByText(TEXT)).toHaveLength(1);
  });
});
