import { heroesFetching, heroesFetched, heroesFetchingError } from "../reducers/index";

export const fetchHeroes = (request) =>  (dispatch) => { ////thunk
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
      .then((data) => dispatch(heroesFetched(data)))
      .catch(() => dispatch(heroesFetchingError()));
  }

