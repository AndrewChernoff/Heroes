import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "all",
};

const filter = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterHeroesAC: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { filterHeroesAC } = filter.actions;

export default filter.reducer;
