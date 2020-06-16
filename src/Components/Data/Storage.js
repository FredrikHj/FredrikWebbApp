/* ==================================================  Props handler ==================================================
Imports module */
import {BehaviorSubject} from "rxjs";

import { axiosGet } from './Axios';

import { runAppUrl } from'./AppUrl';

const incommingTextObj = {};
const gotoPage = '';

// polling start the server every 1 second
setInterval(() => {
    axiosGet();
}, 1000);
//===============================================

export const gotoPage$ = new BehaviorSubject(gotoPage);
export const appUrl$ = new BehaviorSubject(gotoPage);
export const incommingTextObj$ = new BehaviorSubject(incommingTextObj);

export function updateIncommingTextObj(incommingTextObj){
    console.log("updateSavedSQLData -> incommingTextObj", incommingTextObj)
    if(incommingTextObj) incommingTextObj$.next(incommingTextObj);
}

export function updateAppUrl(appUrl){
    if(appUrl) appUrl$.next(appUrl);
}

export function updateGotoPage(gotoPage){    
    console.log("updateGotoPage -> gotoPage", gotoPage)
    if(gotoPage) gotoPage$.next(gotoPage);
}