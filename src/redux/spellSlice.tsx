import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Spell } from "../types/spellInterface";
import { SpellReducerInterface } from "../types/spellReducerInterface";

const initialState: SpellReducerInterface = {
  spellList: [],
};

export const spellSlice = createSlice({
  name: "spell",
  initialState,
  reducers: {
    setSpellList: (state, action: PayloadAction<Array<Spell>>) => {
      state.spellList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSpellList } = spellSlice.actions;

export default spellSlice.reducer;
