import { render, screen } from "@testing-library/react";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { App, AppProps } from "./App";

describe("App", () => {
  const TestPage = () => <div>Test route</div>;

  let props: AppProps;

  beforeEach(() => {
    props = {
      router: createBrowserRouter([{ path: "/", element: <TestPage /> }]),
    };
  });

  it("renders route", () => {
    render(<App {...props} />);
    expect(screen.getAllByText("Test route")).toHaveLength(1);
  });
});
