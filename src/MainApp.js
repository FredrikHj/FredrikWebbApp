/* ================================================== MainApp ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

import {Helmet} from "react-helmet";
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

// Style
import { MainStyle, MainContentStyle, FooterStyle } from './Components/Style/MainStyle';
import { specificBtnStyle } from'./Components/Style/NavBarStyle';

// Generall components
import { WebbServices } from'./Components/Structure/WebbServices';
import FooterContent from'./Components/Structure/FooterContent';
import { routeName } from'./Components/Data/RouteNames';
import { gotoPage$ } from'./Components/Data/Storage';
import { MainPage } from'./MainPage';
import { runAppUrl } from'./Components/Data/AppUrl';

const MainApp = () => {
  const [ appName, updateAppName ] = useState('');
  const [ pageRoute, setPageRoute ] = useState('');
  
  useEffect(() => {
    updateAppName('Fredrik Webbpage');
    gotoPage$.subscribe((gotoPage) => {
      console.log("MainApp -> gotoPage", gotoPage)
      setPageRoute(routeName[gotoPage]);
    });
    if (runAppUrl() === '/') window.location.pathname = "Welcome";
  },[ appName, pageRoute ]);
  
  console.log("MainApp -> pageRoute", pageRoute)

  return (
    <MainStyle.body>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${appName}`}</title>
      </Helmet>
      <Router>
          {pageRoute === routeName.mainPage && <Redirect to={ `/${routeName.welcomeText}`}/>}
          <Route exact path={`/${routeName.welcomeText}`} component={ MainPage } />
          {pageRoute === routeName.webbServices && <Redirect to={ `/${routeName.webbServices}`}/>}
          <Route exact path={`/${routeName.webbServices}`} component={ WebbServices } />
        <FooterStyle.footerContainer>
          <FooterContent/>
        </FooterStyle.footerContainer>
      </Router>
    </MainStyle.body> 
  );
}

export default MainApp;