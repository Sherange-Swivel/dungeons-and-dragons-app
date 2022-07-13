import { render, screen } from "@testing-library/react";
import SpellSearch from "../SpellSearch";

test("renders search component", () => {
  render(<SpellSearch />);
  const input = screen.getByPlaceholderText('Search Spell')
  expect(input).toBeInTheDocument();
});
