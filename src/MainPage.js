/* ================================================== MainPage ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Link } from "react-router-dom";

// Style
import { MainContentStyle, HeaderStyle  } from './Components/Data/Style/MainStyle';
import './Components/Data/Style/NavbarStyle.css';

// Generall components


export const MainPage = () => {
  let [ appName, updateAppName ] = useState('');
  useEffect(() => {
    updateAppName('Fredrik Webbpage');
  },[ appName ]);
  return (
      <>
        <MainContentStyle.header>
            <HeaderStyle.headline>{ appName }</HeaderStyle.headline>
            <HeaderStyle.Content>
            <ul>
                <li><Link to={"/Tjänster"}>Home</Link></li>
                <li><Link to={"/Tjänster"}>Home</Link></li>
                <li><Link to={"/Tjänster"}>Home</Link></li>
            </ul>
            </HeaderStyle.Content>
        </MainContentStyle.header>
        
        <MainContentStyle.outerContentsContainer>
            <MainContentStyle.contentsNavBar>
            FEW
            </MainContentStyle.contentsNavBar>
            <MainContentStyle.innerContentsContainer>
            dvsvb
            </MainContentStyle.innerContentsContainer>
        </MainContentStyle.outerContentsContainer>


        <MainContentStyle.footer>
        <>
        </>

        <>
        </>

        <>
        </>

        </MainContentStyle.footer>
    </>
  );
}