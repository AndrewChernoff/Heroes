import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";
import { useDispatch } from "react-redux";

export const fetchHeroes = createAsyncThunk("heroes/fetchHeroes", async () => {
  const { request } = useHttp();

  const res = await request("http://localhost:3001/heroes");
  return await res;
});

const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
  filteredHeroes: [],
};

const heroes = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    heroesFetchingError: (state) => {
      state.heroesLoadingStatus = "error";
    },
    deleteHeroAC: (state, action) => {
      state.filteredHeroes = state.filteredHeroes.filter(
        (el) => el.id !== action.payload
      );
      state.heroes = state.heroes.filter((el) => el.id !== action.payload);
    },
    addHeroAC: (state, action) => {
      state.filteredHeroes.push(action.payload);
      state.heroes.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroes.pending, (state) => {
        state.heroesLoadingStatus = "loading";
      })
      .addCase(fetchHeroes.fulfilled, (state, action) => {
        state.heroes = action.payload;
        state.filteredHeroes = action.payload;
        state.heroesLoadingStatus = "idle";
      })
      .addCase(fetchHeroes.rejected, (state) => {
        state.heroesLoadingStatus = "error";
      });
  },
});

export const {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
  deleteHeroAC,
  addHeroAC,
} = heroes.actions;

export default heroes.reducer;
