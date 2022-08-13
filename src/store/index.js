import { createStore, compose, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk'
import { combineReducers } from 'redux';

import heroes from '../reducers';
import filter from '../reducers/filterReducer';

const reducers = combineReducers({heroes: heroes, filter: filter})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunk)),

    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
     );

console.log(store.getState())

export default store;