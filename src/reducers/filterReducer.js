import { createReducer } from "@reduxjs/toolkit"
import { filterHeroesAC } from "../actions"

let initialState = {
    filters: [],
    filter: 'all',
    //filteredHeroes: []
}

/* const filter = (state=initialState, action) => {
    switch (action.type) {
        case "FILTER_HEROS":
          return {
            ...state,
            filter: action.payload
          };
        default:
          return state;
      }
} */

const filter = createReducer(initialState, (builder) => {
  builder
    .addCase(filterHeroesAC, (state, action) => {
      state.filter = action.payload
    })
    .addDefaultCase((state,) => {state.filter = 'all'})
})
//export const filterHeroes = (element) => ({ type: "FILTER_HEROS", payload: element });


export default filter;