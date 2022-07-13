import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SpellDetailInterface } from "../types/spellDetailInterface";
import { Spell } from "../types/spellInterface";
import { SpellReducerInterface } from "../types/spellReducerInterface";

const initialState: SpellReducerInterface = {
  spellList: [],
  spellDetails: null,
};

export const spellSlice = createSlice({
  name: "spell",
  initialState,
  reducers: {
    setSpellList: (state, action: PayloadAction<Array<Spell>>) => {
      state.spellList = action.payload;
    },
    setSpellDetails: (state, action: PayloadAction<SpellDetailInterface>) => {
      state.spellDetails = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSpellList, setSpellDetails } =
  spellSlice.actions;

export default spellSlice.reducer;
