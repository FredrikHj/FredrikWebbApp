import { navRouteName } from'./NavRouteName';

import { from } from "rxjs";
export const runAppUrl = () => {
    let getUrlAdress = '';
    getUrlAdress = window.location.hash.split('#')[1];
    console.log("runAppUrl -> getUrlAdress", getUrlAdress)
    return getUrlAdress;
}