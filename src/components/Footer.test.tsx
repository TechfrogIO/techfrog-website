import { render, screen } from "@testing-library/react";
import React from "react";
import { Footer, FooterProps } from "./Footer";

describe("Footer", () => {
  let props: FooterProps;

  beforeEach(() => {
    props = {
      company: "ACME",
      startCopyDate: "2023",
    };
  });

  it("renders excluding end date", () => {
    const expectedText = `© ${props.startCopyDate} ${props.company}. All rights reserved.`;
    render(<Footer {...props} />);
    expect(screen.getAllByText(expectedText)).toHaveLength(1);
  });

  it("renders including end date", () => {
    props.endCopyDate = "2024";
    const expectedText = `© ${props.startCopyDate}-${props.endCopyDate} ${props.company}. All rights reserved.`;

    render(<Footer {...props} />);
    expect(screen.getAllByText(expectedText)).toHaveLength(1);
  });
});
