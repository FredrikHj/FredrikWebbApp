/* ================================================== MainApp ==================================================
Imports module */
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import {Helmet} from "react-helmet";
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

// Style
import { MainStyle } from './Components/Style/MainStyle';
import { MainContentStyle, FooterStyle  } from './Components/Style/MainStyle';

// Generall components
import { WebbServices } from'./Components/Structure/WebbServices';
import { gotoPage$ } from'./Components/Data/Storage';
import HeaderContent from'./Components/Structure/HeaderContent';
import FooterContent from'./Components/Structure/FooterContent';
import { routeName } from'./Components/Data/RouteNames';
import { MainPage } from'./MainPage';

const MainApp = (states) => {
  let [ appName, updateAppName ] = useState('');
  let [ pageRoute, setPageRoute ] = useState('');
  
  useEffect(() => {
    updateAppName('Fredrik Webbpage');
    gotoPage$.subscribe((gotoPage) => {
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
          <HeaderContent/>
        </MainContentStyle.header>
        <MainContentStyle.headerEndLine></MainContentStyle.headerEndLine>

        <MainContentStyle.outerContentsContainer>
          {pageRoute === '/' && <Redirect to={ `/`}/>}
          {pageRoute === 'webbServices' && <Redirect to={ `/WebbServices`}/>}
          <Route exact path="/" component={ MainPage } />
          <Route path="/WebbServices" component={ WebbServices } />
        </MainContentStyle.outerContentsContainer>

        <FooterStyle.footerContainer>
          <FooterContent/>
        </FooterStyle.footerContainer>
      </Router>
    </MainStyle.body> 
  );
}

export default MainApp;