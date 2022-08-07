const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
  filters: [],
  filter: 'all',
  filteredHeroes: []
};

const reducer = (state = initialState, action) => {
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
        //heroes: state.heroes.filter((el) => el.id !== action.payload),
        filteredHeroes: [...state.filteredHeroes].filter((el) => el.id !== action.payload) ////here
      };
    case "ADD_HERO":
      return {
        ...state,
        filteredHeroes: [...state.filteredHeroes, action.payload],
      };
    case "FILTER_HEROS":
      return {
        ...state,
        filter: action.payload,

        filteredHeroes: state.filter === 'all'? [...state.heroes] 
        :  [...state.heroes.filter(el => el.element === state.filter)] 
      };
    default:
      return state;
  }
};

export const deleteHeroAC = (userId) => ({ type: "DELETE_HERO", payload: userId });
export const addHeroAC = (item) => ({ type: "ADD_HERO", payload: item });
export const filterHeroes = (element) => ({ type: "FILTER_HEROS", payload: element });

export default reducer;
