/* ==================================================  Props handler ==================================================
Imports module */
import {BehaviorSubject} from "rxjs";

const incommingSQLDataArr = [];
const userData = '';
const gotoPage = '';

//===============================================

export const incommingSQLDataArr$ = new BehaviorSubject(incommingSQLDataArr);
export const userData$ = new BehaviorSubject(userData);
export const gotoPage$ = new BehaviorSubject(gotoPage);
export const appUrl$ = new BehaviorSubject(gotoPage);

export function updateUserData(loginData){
    /* The functions are triggered in another place.
        The function updateLocalstorage is triggered together with the incomming data.
        The incomming data is saved for the subscriber.  
    */
    if(loginData) {
        userData$.next(loginData);
    }
}
export function updateSavedSQLData(incommingSQLDataArr){
    if(incommingSQLDataArr) incommingSQLDataArr$.next(incommingSQLDataArr);
}
export function updateAppUrl(appUrl){
    if(appUrl) appUrl$.next(appUrl);
}

export function updateGotoPage(gotoPage){    
    if(gotoPage) gotoPage$.next(gotoPage);
}