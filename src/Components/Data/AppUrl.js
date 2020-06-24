import { navRouteName } from'./NavRouteName';

import { from } from "rxjs";
export const runAppUrl = () => {
    let getAppPathAddress = '';

    //Get you a slash indentifying the route as = /
    getAppPathAddress = window.location.pathname;
    console.log(window.location);
    
    return getAppPathAddress;
}