/* ================================================== HeaderPage ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Link } from "react-router-dom";

// Style
import { NavBarStyle, CommonBtnStyle, specificBtnStyle } from'../Style/NavBarStyle';
import { HeaderStyle, MainContentStyle  } from '../Style/MainStyle';

// Generall components
import  fredrikLogo from'../Data/bilder/logga_small.png';
import { runGoToPage } from'../Data/CommonFunctions';
import { Button } from'../Data/Button';
import { runAppUrl } from'../Data/AppUrl';

const HeaderContent = (props) => {
  let [ appName, updateAppName ] = useState('');
  let [ urlChanged, updateUrlChanged ] = useState(false);
  let [ redirectionPath, updateRedirectionPath ] = useState('');
  let [ currentUrl, updateCurrentUrl ] = useState('');
  
  const { content } = props;
  //let [ correctAppUrl, setCorrectAppUrl ] = useState('');
  useEffect(() => {
    updateAppName('Fredrik Webbpage');
  },[ appName, redirectionPath ]);
  
  console.log("runAppUrl", runAppUrl())

  return (
    <>
      <>
        {(runAppUrl() !== '/Welcome')
          ?
            <specificBtnStyle.logoBtn onClick={ runGoToPage } id="mainPage">
              <HeaderStyle.appLogoLink src={ fredrikLogo } alt="Fredriks logga!" id="mainPage" onClick={ runGoToPage }/>
            </specificBtnStyle.logoBtn>
          : 
            <specificBtnStyle.logo>
              <HeaderStyle.appLogoLink src={ fredrikLogo } alt="Fredriks logga!" id="mainPage" onClick={ runGoToPage }/>
            </specificBtnStyle.logo>
        }
        <NavBarStyle.topBarContainer>
          {content}
          <specificBtnStyle.lastNavPageContainer>
            <Button
              styleBtn={ specificBtnStyle.btnInactive }
              content={ <CommonBtnStyle.btnHeadline onClick={ runGoToPage } data-optional={ runGoToPage } style={ specificBtnStyle.lastNavPage }>Om</CommonBtnStyle.btnHeadline> }
              onClickFunction={runGoToPage}
            />
          </specificBtnStyle.lastNavPageContainer>
        </NavBarStyle.topBarContainer>
        
        </>
        <>

        </>
      </>
    );
  }
export default HeaderContent;