import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../redux/store";
import { Spell } from "../../../types/spellInterface";
import SpellCard from "../SpellCard";

test("renders card component", () => {
  const mockData: Spell = {
    index: "animal-friendship",
    name: "Animal Friendship",
    url: "/api/spells/animal-friendship",
  };
  render(
    <BrowserRouter>
      <Provider store={store}>
        <SpellCard spell={mockData} index={0} />
      </Provider>
    </BrowserRouter>
  );
  const element = screen.getByTestId("card-element");
  expect(element).toBeInTheDocument();
});
