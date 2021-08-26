import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("should test App Component", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const textEl = screen.getByText(/Home Page/i);
    expect(textEl).toBeInTheDocument();
  });
});
