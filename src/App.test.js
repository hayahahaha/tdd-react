import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const text = screen.getByText(/hello react/i);
  expect(text).toBeInTheDocument();
});

test("It should have a default initial value of 0", () => {
  render(<App />);
  const count = screen.queryByText(0);
  expect(count).toBeVisible();
});

test("It should increase value by one when click submit", () => {
  render(<App />);
  fireEvent.click(screen.getByText("submit"));
  const count = screen.queryByText(1);
  expect(count).toBeVisible();
});
