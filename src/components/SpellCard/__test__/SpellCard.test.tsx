import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Spell } from "../../../types/spellInterface";
import SpellCard from "../SpellCard";

test("renders card component", () => {
  const mockData: Spell = {
    index: "animal-friendship",
    name: "Animal Friendship",
    url: "/api/spells/animal-friendship",
  };
  render(<BrowserRouter><SpellCard spell={mockData} index={0}  /></BrowserRouter>);
  const element = screen.getByTestId("card-element");
  expect(element).toBeInTheDocument();
});
