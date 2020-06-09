/* ================================================== MainApp ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

import {Helmet} from "react-helmet";
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

// Style
import { MainStyle } from './Components/Style/MainStyle';
import { specificBtnStyle } from'./Components/Style/NavBarStyle';
import { MainContentStyle, FooterStyle  } from './Components/Style/MainStyle';


// Generall components
import { WebbServices } from'./Components/Structure/WebbServices';
import HeaderContent from'./Components/Structure/HeaderContent';
import FooterContent from'./Components/Structure/FooterContent';
import { routeName } from'./Components/Data/RouteNames';
import { gotoPage$ } from'./Components/Data/Storage';
import { Button } from'./Components/Data/Button';
import { MainPage } from'./MainPage';
import { ObjectUnsubscribedError } from 'rxjs';
import { runAppUrl } from'./Components/Data/AppUrl';

const MainApp = () => {
  let [ appName, updateAppName ] = useState('');
  let [ pageRoute, setPageRoute ] = useState('');
  
  useEffect(() => {
    updateAppName('Fredrik Webbpage');
    gotoPage$.subscribe((gotoPage) => {
      console.log("MainApp -> gotoPage", gotoPage)
      setPageRoute(routeName[gotoPage]);
    });
    if (runAppUrl() === '/') window.location.pathname = "Welcome";
  },[ appName, pageRoute ]);
  
  console.log("MainApp -> pageRoute", pageRoute)
  const runGoToPage = (e) => {
    /*     const targetPage = e.target.id;
    updateCurrentUrl(targetPage);
    
    updateGotoPage(targetPage);
    updateUrlChanged(true);
    updateRedirectionPath(targetPage); */
  }
  return (
    <MainStyle.body>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${appName}`}</title>
      </Helmet>
      <Router>
        <MainContentStyle.header>
          <HeaderContent/>
        </MainContentStyle.header>
        <specificBtnStyle.lastNavPageContainer>
          <Button
            styleText={ specificBtnStyle.lastNavPage }
            name={ 'Om' }
            onClickFunction={ runGoToPage }
            id={ '' }
            btnOptional={ '' }
          />
        </specificBtnStyle.lastNavPageContainer>
        <MainContentStyle.headerEndLine></MainContentStyle.headerEndLine>

        <MainContentStyle.outerContentsContainer>
          {pageRoute === routeName.mainPage && <Redirect to={ `/${routeName.welcomeText}`}/>}
          <Route exact path={`/${routeName.welcomeText}`} component={ MainPage } />
          {pageRoute === routeName.webbServices && <Redirect to={ `/${routeName.webbServices}`}/>}
          <Route exact path={`/${routeName.webbServices}`} component={ WebbServices } />
        </MainContentStyle.outerContentsContainer>

        <FooterStyle.footerContainer>
          <FooterContent/>
        </FooterStyle.footerContainer>
      </Router>
    </MainStyle.body> 
  );
}

export default MainApp;