import { combineReducers } from "redux";
import updateAppUrl from'./ReducerShowAppUrl';
import updateTextResp from'./ReducerTextResp';

const allReducers = combineReducers({
    appUrl: updateAppUrl,
    textRes: updateTextResp,
});

export default allReducers;