import { createStore } from "redux";
import combineReducers from './Reducers';
console.log("combineReducers", combineReducers);

export default createStore(combineReducers);