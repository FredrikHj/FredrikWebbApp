import {routeName } from'./RouteNames';

export const runAppUrl = () => {
    let getUrlAdress = window.location.pathname;
    console.log("runAppAddress -> getUrlAdress", getUrlAdress)

    if(getUrlAdress === '/FredrikWebbApp') getUrlAdress = routeName.welcomeText;
    return getUrlAdress;
}