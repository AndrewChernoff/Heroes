const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
  filteredHeroes: []
};

const heroes = (state = initialState, action) => {
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
        filteredHeroes: [...state.filteredHeroes].filter((el) => el.id !== action.payload)
      };
    case "ADD_HERO":
      return {
        ...state,
        filteredHeroes: [...state.filteredHeroes, action.payload],
        };
    
    default:
      return state;
  }
};

export const deleteHeroAC = (userId) => ({ type: "DELETE_HERO", payload: userId });
export const addHeroAC = (item) => ({ type: "ADD_HERO", payload: item });


export default heroes;
