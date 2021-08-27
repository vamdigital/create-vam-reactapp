import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./store/store";

describe("App", () => {
  it("should test App Component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const textEl = screen.getByText(/Home Page/i);
    expect(textEl).toBeInTheDocument();
  });
});
