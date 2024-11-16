import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});

test("should load 2 input box in contact us component", () => {
  render(<Contact />);

  const inputboxes = screen.getAllByRole("textbox");

  //Assertion
  expect(inputboxes.length).toBe(2);
});
