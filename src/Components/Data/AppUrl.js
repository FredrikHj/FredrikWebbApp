import { navRouteName } from'./NavRouteName';

import { from } from "rxjs";
export const runAppUrl = () => {
    let getUrlAdress = '';
    getUrlAdress = window.location.pathname;
    if(getUrlAdress === '/FredrikWebbApp') window.location.pathname = navRouteName.headLine0.name;
    return getUrlAdress;
}