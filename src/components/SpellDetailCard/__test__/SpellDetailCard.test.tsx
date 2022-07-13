import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import SpellDetailCard from "../SpellDetailCard";

test("renders card detail component", () => {
  render(
    <Provider store={store}>
      <SpellDetailCard />
    </Provider>
  );
  const element = screen.getByTestId("card-detail-element");
  expect(element).toBeInTheDocument();
});
