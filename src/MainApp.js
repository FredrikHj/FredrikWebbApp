/* ================================================== MainApp ==================================================
Imports module */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from'react-redux';

import {Helmet} from "react-helmet";
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

// Style
import { MainStyle } from './Components/Style/MainStyle';
import { specificBtnStyle } from'./Components/Style/NavBarStyle';
import { MainContentStyle, FooterStyle  } from './Components/Style/MainStyle';


// Generall components
import { saveTextResp } from'./Components/Data/Redux/Actions/ActionUpdateTextResp';
import { WebbServices } from'./Components/Structure/WebbServices';
import HeaderContent from'./Components/Structure/HeaderContent';
import FooterContent from'./Components/Structure/FooterContent';
import { routeName } from'./Components/Data/RouteNames';
import { gotoPage$ } from'./Components/Data/Storage';
import { axiosGet } from './Components/Data/Axios';
import { Button } from'./Components/Data/Button';
import { MainPage } from'./MainPage';

const MainApp = () => {
  let [ appName, updateAppName ] = useState('');
  let [ pageRoute, setPageRoute ] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    updateAppName('Fredrik Webbpage');
    gotoPage$.subscribe((gotoPage) => {
      setPageRoute(routeName[gotoPage]);
    });
    dispatch(saveTextResp(axiosGet('GetText')));    
  },[ appName, pageRoute ]);
  
  const runGoToPage = (e) => {
/*     const targetPage = e.target.id;
    updateCurrentUrl(targetPage);

    updateGotoPage(targetPage);
    updateUrlChanged(true);
    updateRedirectionPath(targetPage); */
  }
  console.log("MainApp -> pageRoute", pageRoute)
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
          {pageRoute === '' && <Redirect to={ `/Welcome`}/>}
          {pageRoute === 'webbServices' && <Redirect to={ `/WebbServices`}/>}
          <Route exact path="/Welcome" component={ MainPage } />
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