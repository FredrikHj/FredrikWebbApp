/* ================================================== MainApp ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

import {Helmet} from "react-helmet";
// React Router - ES6 modules
import {HashRouter, Route, Redirect, Link } from "react-router-dom";

// Style
import { MainStyle, MainContentStyle, FooterStyle } from './Components/Style/MainStyle';
import { specificBtnStyle } from'./Components/Style/NavBarStyle';

// Generall components
import { Development } from'./Components/Structure/Development';
import FooterContent from'./Components/Structure/FooterContent';
import { MyProjects } from'./Components/Structure/MyProjects';
import { navRouteName } from'./Components/Data/NavRouteName';
import { AbouteMe } from'./Components/Structure/AbouteMe';
import { gotoPage$ } from'./Components/Data/Storage';
import { runAppUrl } from'./Components/Data/AppUrl';
import { MainPage } from'./MainPage';
import { HeaderContent } from'./Components/Structure/HeaderContent';

import { from } from 'rxjs';
const MainApp = () => {
  const [ appName, updateAppName ] = useState('');
  const [ pageRoute, setPageRoute ] = useState('');
  
  useEffect(() => {
    updateAppName('Fredriks Utveckling');
    gotoPage$.subscribe((gotoPage) => {
      console.log("MainApp -> gotoPage", gotoPage)
      if (gotoPage === 'FredrikDev') gotoPage = '/';
      setPageRoute(gotoPage);
    });
    if(runAppUrl() === '/') setPageRoute(runAppUrl());
  },[ appName, pageRoute ]);
  console.log(navRouteName.headLine0.route);
  
  console.log("MainApp -> runAppUrl()", runAppUrl())
  console.log("MainApp -> pageRoute", pageRoute)
  
  return (
    <MainStyle.body>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${appName}`}</title>
      </Helmet>
      <HashRouter basename="/">
        {pageRoute === '/' && <Redirect to={ navRouteName.headLine0.route } />}
        <Route exact path={ navRouteName.headLine0.route } component={ MainPage } />
        
        {pageRoute === navRouteName.headLine1.id && <Redirect to={ navRouteName.headLine1.route}/>}
        <Route exact path={ navRouteName.headLine1.route } component={ Development } />
        
        {pageRoute === navRouteName.headLine2.id && <Redirect to={ `/${navRouteName.headLine2.route}`}/>}
        <Route exact path={`/${navRouteName.headLine2.route}`} component={ MyProjects } />           
        
        {pageRoute === navRouteName.lastHeadLine.id && <Redirect to={ navRouteName.lastHeadLine.route }/>}
        <Route exact path={ navRouteName.lastHeadLine.route} component={ AbouteMe } />
      
      </HashRouter>
        <FooterStyle.footerContainer>
          <FooterContent/>
        </FooterStyle.footerContainer>
    </MainStyle.body> 
  );
}

export default MainApp;