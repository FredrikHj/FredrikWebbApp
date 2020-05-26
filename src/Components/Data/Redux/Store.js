import { createStore } from "redux";
import combineReducers from './Reducers/Index';
console.log("combineReducers", combineReducers())

export default createStore(combineReducers);