import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./App.css";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Provider store={store}>
      <div className="spell-app" data-testid="app-element">
        <HomePage />
      </div>
    </Provider>
  );
};

export default App;
