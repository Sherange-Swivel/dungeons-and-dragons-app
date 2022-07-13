import { configureStore } from "@reduxjs/toolkit";
import spellSlice from "./spellSlice";

export const store = configureStore({
  reducer: {
    spells : spellSlice
  },
});
