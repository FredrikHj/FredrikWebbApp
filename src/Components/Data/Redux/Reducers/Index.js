import { combineReducers } from "redux";
import updateAppUrl from'./ShowAppUrl';

const allReducers = combineReducers({
    appUrl: updateAppUrl,
});

export default allReducers;