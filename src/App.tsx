import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import "./App.css";

import HomePage from "./pages/HomePage";
import SpellDetailPage from "./pages/SpellDetailPage";

const App = () => {
  return (
    <Provider store={store}>
      <div className="spell-app" data-testid="app-element">
        <h1>Dungeons and Dragons - SPELLS</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/spells" element={<SpellDetailPage />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
