/* ================================================== MainApp ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

import { connect } from "react-redux";
import { showAppUrl } from "./Components/Data/Redux/Actions";

import {Helmet} from "react-helmet";
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

// Style
import { MainStyle } from './Components/Style/MainStyle';
import { MainContentStyle  } from './Components/Style/MainStyle';

// Generall components
import HeaderContent from'./Components/Structure/HeaderContent';
import FooterContent from'./Components/Structure/FooterContent';
import { routeName } from'./Components/Data/RouteNames';
import { WebbServices } from'./Components/Structure/WebbServices';
import { gotoPage$, updateAppUrl } from'./Components/Data/Storage';
import { MainPage } from'./MainPage';
import { appUrl } from'./Components/Data/AppUrl';

const MainApp = () => {
  let [ appName, updateAppName ] = useState('');
  let [ pageRoute, setPageRoute ] = useState('/');

  useEffect(() => {
    updateAppName('Fredrik Webbpage');
    showAppUrl(appUrl());
    gotoPage$.subscribe((gotoPage) => {
      console.log("MainContent -> gotoPage", gotoPage)
      setPageRoute(routeName[gotoPage]);
    });
  },[ appName, pageRoute ]);
  
  return (
    <MainStyle.body>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${appName}`}</title>
      </Helmet>
      <Router>
        <MainContentStyle.header>
          <HeaderContent

          />
        </MainContentStyle.header>

        <MainContentStyle.outerContentsContainer>
          {pageRoute === '/' && <Redirect to={ `/`}/>}
          {pageRoute === 'webbServices' && <Redirect to={ `/WebbServices`}/>}
          <Route exact path="/" component={ MainPage } />
          <Route exact path="/WebbServices" component={ WebbServices } />
        </MainContentStyle.outerContentsContainer>

        <MainContentStyle.footer>
          <FooterContent/>
        </MainContentStyle.footer>
      </Router>
    </MainStyle.body> 
  );
}

export default MainApp;