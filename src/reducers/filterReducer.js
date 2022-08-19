import {  createSlice } from "@reduxjs/toolkit"

let initialState = {
    filters: [],
    filter: 'all'
}

const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterHeroesAC: (state, action) => {
      state.filter = action.payload
    }
  },
})

export const {filterHeroesAC} = filter.actions;

export default filter.reducer;