
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
            filter: action.payload,
    
            /* filteredHeroes: state.filter === 'all'? [...state.heroes] 
            :  [...state.heroes.filter(el => el.element === state.filter)]  */ /// to list component
          };
        default:
          return state;
      }
}

export const filterHeroes = (element) => ({ type: "FILTER_HEROS", payload: element });


export default filter;