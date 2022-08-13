
let initialState = {
    filters: [],
    filter: 'all',
    //filteredHeroes: []
}

const filter = (state=initialState, action) => {
    switch (action.type) {
        case "FILTER_HEROS":
          return {
            ...state,
            filter: action.payload
          };
        default:
          return state;
      }
}

export const filterHeroes = (element) => ({ type: "FILTER_HEROS", payload: element });


export default filter;