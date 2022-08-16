import { createAction } from "@reduxjs/toolkit";

/* export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
} */

/* export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
} */ 

/* export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
} */

/* export const deleteHeroAC = (userId) => ({ type: "DELETE_HERO", payload: userId });
export const addHeroAC = (item) => ({ type: "ADD_HERO", payload: item }); */

export const heroesFetching = createAction('HEROES_FETCHING');
export const heroesFetched = createAction('HEROES_FETCHED');
export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');
export const deleteHeroAC = createAction('DELETE_HERO');
export const addHeroAC = createAction('ADD_HERO');

export const filterHeroesAC = createAction('FILTER_HEROS')

export const fetchHeroes = (request) =>  (dispatch) => { ////thunk
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
      .then((data) => dispatch(heroesFetched(data)))
      .catch(() => dispatch(heroesFetchingError()));
  }

