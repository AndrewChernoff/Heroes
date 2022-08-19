import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
  filteredHeroes: []
};

const heroes = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    heroesFetching: (state) => {
      state.heroesLoadingStatus = "loading"
    },
    heroesFetched: (state, action) => {
      state.heroes = action.payload;
      state.filteredHeroes = action.payload;
      state.heroesLoadingStatus = "idle";
    },
    heroesFetchingError: (state) => {
      state.heroesLoadingStatus = "error";
    },
    deleteHeroAC: (state, action) => {
      state.filteredHeroes = state.filteredHeroes.filter((el) => el.id !== action.payload);
      state.heroes = state.heroes.filter((el) => el.id !== action.payload);
    },
    addHeroAC: (state, action) => {
      state.filteredHeroes.push(action.payload);
      state.heroes.push(action.payload);
    },
  },
})

export const { heroesFetching, heroesFetched, heroesFetchingError, deleteHeroAC, addHeroAC } = heroes.actions

export default heroes.reducer;
