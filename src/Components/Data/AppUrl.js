import { navRouteName } from'./NavRouteName';

import { from } from "rxjs";
export const runAppUrl = () => {
    let getAppPathAddress = '';

    //Get you a slash indentifying the route as = /
    getAppPathAddress = window.location.hash.split('#')[1];
    console.log("runAppUrl -> getAppPathAddress", getAppPathAddress)
    //if(getAppPathAddress === '/') getAppPathAddress = navRouteName.headLine0.route;
    return getAppPathAddress;
}