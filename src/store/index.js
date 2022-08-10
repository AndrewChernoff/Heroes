import { createStore } from 'redux';
import { combineReducers } from 'redux';


import heroes from '../reducers';
import filter from '../reducers/filterReducer';

const reducers = combineReducers({heroes: heroes, filter: filter})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState())

export default store;