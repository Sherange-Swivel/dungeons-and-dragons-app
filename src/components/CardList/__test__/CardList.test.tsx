import { render, screen } from "@testing-library/react";
import CardList from "../CardList";

test("renders card list component", () => {
  render(<CardList />);
  const element = screen.getByTestId("card-list-element");
  expect(element).toBeInTheDocument();
});
