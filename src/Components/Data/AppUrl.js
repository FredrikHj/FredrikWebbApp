import { navRouteName } from'./NavRouteName';

import { from } from "rxjs";
export const runAppUrl = () => {
    let getAppPathAddress = '';
    let getAppDomain = '';

    //Get you a slash indentifying the route as = /
    getAppPathAddress = window.location.pathname.split('')[0];
    getAppDomain = window.location.hostname;
    if(getAppDomain !== 'localhost') getAppPathAddress = `FredrikDev/${navRouteName.headLine0.route}`;
    console.log(getAppDomain);
    
    if(getAppPathAddress === '/') getAppPathAddress = navRouteName.headLine0.route;
    return getAppPathAddress;
}