import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import CardList from "../CardList";

test("renders card list component", () => {
  render(
    <Provider store={store}>
  <CardList />
  </Provider>
  );
  const element = screen.getByTestId("card-list-element");
  expect(element).toBeInTheDocument();
});
