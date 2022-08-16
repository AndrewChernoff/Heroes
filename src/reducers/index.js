import { createReducer } from "@reduxjs/toolkit";
import { addHeroAC, deleteHeroAC, heroesFetched, heroesFetching, heroesFetchingError } from "../actions";

const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
  filteredHeroes: []
};


const heroes = createReducer(initialState, (builder) => {
  builder
    .addCase(heroesFetching, (state) => {
      state.heroesLoadingStatus = "loading"
    })
    .addCase(heroesFetched, (state, action) => {
      state.heroes = action.payload;
      state.filteredHeroes = action.payload;
      state.heroesLoadingStatus = "idle";
    })
    .addCase(heroesFetchingError, (state) => {
      state.heroesLoadingStatus = "error";
    })
    .addCase(deleteHeroAC, (state, action) => {
      state.filteredHeroes = state.filteredHeroes.filter((el) => el.id !== action.payload);
      state.heroes = state.heroes.filter((el) => el.id !== action.payload);
    })
    .addCase(addHeroAC, (state, action) => {
      state.filteredHeroes.push(action.payload);
      state.heroes.push(action.payload);
    })
})

/* const heroes = (state = initialState, action) => {
  switch (action.type) {
    case "HEROES_FETCHING":
      return {
        ...state,
        heroesLoadingStatus: "loading",
      };
    case "HEROES_FETCHED":
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: "idle",
        filteredHeroes: action.payload
      };
    case "HEROES_FETCHING_ERROR":
      return {
        ...state,
        heroesLoadingStatus: "error",
      };
    case "DELETE_HERO":
      return {
        ...state,
        filteredHeroes: [...state.filteredHeroes].filter((el) => el.id !== action.payload),
        heroes: [...state.heroes].filter((el) => el.id !== action.payload)
      };
    case "ADD_HERO":
      return {
        ...state,
        filteredHeroes: [...state.filteredHeroes, action.payload],
        heroes: [...state.heroes, action.payload]////
        };
    
    default:
      return state;
  }
}; */

export default heroes;
