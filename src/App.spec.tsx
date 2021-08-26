import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("App", () => {
  it("should test App Component", () => {
    render(<App />);
    const textEl = screen.getByText("Hello Vite + React!");
    expect(textEl).toBeInTheDocument();
  });
});
