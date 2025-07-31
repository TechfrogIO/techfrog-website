import { render, screen } from "@testing-library/react";
import React from "react";
import { SiteHeader, SiteHeaderProps } from "./SiteHeader";

describe("Content", () => {
  const text = "Site Header";
  let props: SiteHeaderProps;

  beforeEach(() => {
    props = {
      headerText: text,
    };
  });

  it("renders with header text", () => {
    render(<SiteHeader {...props} />);
    expect(screen.getAllByText(text)).toHaveLength(1);
  });
});
