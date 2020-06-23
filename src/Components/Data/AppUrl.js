import { navRouteName } from'./NavRouteName';

import { from } from "rxjs";
export const runAppUrl = () => {
    let getUrlAdress = '';
    //Get you a slash indentifying the route as = /
    getUrlAdress = window.location.pathname.split('')[0];
    console.log(getUrlAdress);
    
    if(getUrlAdress === '/') getUrlAdress = navRouteName.headLine0.route;
    return getUrlAdress;
}