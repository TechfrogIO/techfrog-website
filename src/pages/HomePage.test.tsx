import React from "react";
import { render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage";

describe("HomePage", () => {
  it("renders", () => {
    render(<HomePage />);
    expect(screen.getAllByText("Page Not Found")).toHaveLength(1);
  });
});
