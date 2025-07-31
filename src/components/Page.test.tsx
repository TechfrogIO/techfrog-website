import { render, screen } from "@testing-library/react";
import React from "react";
import { Page, PageProps } from "./Page";

describe("Page", () => {
  const text = "Test page";
  let props: PageProps;

  beforeEach(() => {
    props = {
      children: [<span>{text}</span>],
    };
  });

  it("renders with children andn footer", () => {
    render(<Page {...props} />);
    expect(screen.getAllByText(text)).toHaveLength(1);
    expect(screen.getAllByText(/All rights reserved./)).toHaveLength(1);
  });

  it("renders footer when no children", () => {
    props.children = [];

    render(<Page {...props} />);
    expect(screen.getAllByText(/All rights reserved./)).toHaveLength(1);
  });
});
