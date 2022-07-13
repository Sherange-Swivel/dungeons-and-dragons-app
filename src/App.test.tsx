import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders app", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const element = screen.getByTestId("app-element");
  expect(element).toBeInTheDocument();
});

test("renders home page", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const element = screen.getByTestId("home-element");
  expect(element).toBeInTheDocument();
});
