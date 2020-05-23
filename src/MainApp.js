/* ================================================== MainApp ==================================================
Imports module */
import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
// React Router - ES6 modules
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

// Style
import { MainStyle } from './Components/Data/Style/MainStyle';

// Generall components
import { MainPage } from './MainPage';

const MainApp = () => {
  let [ appName, updateAppName ] = useState('');
  let [ redirectToPage, updateRedirectToPage ] = useState('/');

  useEffect(() => {
    updateAppName('Fredrik Webbpage');
    //if(redirectToPage === '') return <Redirect to={ `/`}/>

  },[ appName ]);
  return (
    <MainStyle.body>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${appName}`}</title>
      </Helmet>
      <Router>
       <Route exact path="/" component={ MainPage } />
      </Router>
    </MainStyle.body> 
  );
}

export default MainApp;