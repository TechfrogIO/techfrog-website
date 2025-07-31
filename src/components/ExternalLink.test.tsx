import { render, screen } from "@testing-library/react";
import React from "react";
import { ExternalLink, ExternalLinkProps } from "./ExternalLink";

describe("ExternalLink", () => {
  let props: ExternalLinkProps;

  beforeEach(() => {
    props = {
      linkAddress: "https://helloworld.com",
      linkText: "hello world",
    };
  });

  it("renders with address and text", () => {
    render(<ExternalLink {...props} />);
    expect(screen.getAllByText(props.linkText)).toHaveLength(1);
    expect(screen.getByRole("link", { name: props.linkText }).getAttribute("href")).toBe(props.linkAddress);
  });
});
