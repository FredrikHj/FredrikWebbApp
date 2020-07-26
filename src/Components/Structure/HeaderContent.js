/* ================================================== HeaderPage ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Link } from "react-router-dom";

// Style
import { NavBarStyle, CommonBtnStyle, specificBtnStyle } from'../Style/NavBarStyle';
import { HeaderStyle, MainContentStyle  } from '../Style/MainStyle';

// Generall components
import fredrikLogo from'../Data/bilder/logga_small.png';
import fredrikPortrait from'../Data/bilder/FredrikHjarpe.jpg';

import { runGoToPage } from'../Data/CommonFunctions';
import { Button } from'../Data/Button';
import { runAppUrl } from'../Data/AppUrl';
import { navRouteName } from'../Data/NavRouteName';

export const HeaderContent = (props) => {
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
          <specificBtnStyle.logoBtn onClick={ runGoToPage } id="welcome">
              <HeaderStyle.appLogoLink src={ fredrikLogo } alt="Fredriks logga!" id="welcome" onClick={ runGoToPage }/>
            </specificBtnStyle.logoBtn>
          : 
          <specificBtnStyle.logo>
              <HeaderStyle.appLogoLink src={ fredrikLogo } alt="Fredriks logga!" id="mainPage" onClick={ runGoToPage }/>
          </specificBtnStyle.logo>
        }
        <HeaderStyle.portrait src={ fredrikPortrait } alt="Porträtt - Fredrik Hjärpe"/>
        <NavBarStyle.topBarContainer>
        <NavBarStyle.mobileContentContainer>
          Meny kommer snart ...
        </NavBarStyle.mobileContentContainer>
          <NavBarStyle.contentContainer>
            {/* 
            <Button
              styleBtn={ runAppUrl() !== '/Utveckling' && specificBtnStyle.btnInactive || specificBtnStyle.btnActive }
              content={ runAppUrl() !== '/Utveckling' 
                && <CommonBtnStyle.btnHeadline id={ navRouteName.headLine1.id } onClick={ runGoToPage } style={ specificBtnStyle.lastNavPageInactive }>{ navRouteName.headLine1.name }</CommonBtnStyle.btnHeadline> 
                ||
                  <>
                    <CommonBtnStyle.btnHeadline id={ navRouteName.headLine1.id } onClick={ runGoToPage } style={ specificBtnStyle.lastNavPageActive }>{ navRouteName.headLine1.name }</CommonBtnStyle.btnHeadline>
                    <CommonBtnStyle.btnMarker></CommonBtnStyle.btnMarker>
                  </>
              }
              onClickFunction={runGoToPage}
              id={ navRouteName.headLine1.id }
              groupName={ 'headLine1' }
            />
            <Button
              styleBtn={ runAppUrl() !== '/MinaProjekt' && specificBtnStyle.btnInactive || specificBtnStyle.btnActive }
              content={ runAppUrl() !== '/MinaProjekt' 
                && <CommonBtnStyle.btnHeadline id={ navRouteName.headLine2.id } onClick={ runGoToPage } style={ specificBtnStyle.lastNavPageInactive }>{ navRouteName.headLine2.name }</CommonBtnStyle.btnHeadline> 
                ||
                  <>
                    <CommonBtnStyle.btnHeadline id={ navRouteName.headLine2.id } onClick={ runGoToPage } style={ specificBtnStyle.lastNavPageActive }>{ navRouteName.headLine2.name }</CommonBtnStyle.btnHeadline>
                    <CommonBtnStyle.btnMarker></CommonBtnStyle.btnMarker>
                  </>
              }
              onClickFunction={runGoToPage}
              id={ navRouteName.headLine2.id }
              /> */}
            </NavBarStyle.contentContainer>
            <specificBtnStyle.lastNavPageContainer>
              <Button
                styleBtn={ runAppUrl() !== '/OmMig' && specificBtnStyle.btnInactive || specificBtnStyle.btnActive}
                content={runAppUrl() !== '/OmMig'
                && <CommonBtnStyle.btnHeadline id={ navRouteName.lastHeadLine.id } onClick={ runGoToPage } style={ specificBtnStyle.lastNavPageInactive }>{ navRouteName.lastHeadLine.name }</CommonBtnStyle.btnHeadline> 
                ||
                  <>
                    <CommonBtnStyle.btnHeadline id={ navRouteName.lastHeadLine.id } onClick={ runGoToPage } style={ specificBtnStyle.lastNavPageActive }>{ navRouteName.lastHeadLine.name }</CommonBtnStyle.btnHeadline>
                    <CommonBtnStyle.btnMarker></CommonBtnStyle.btnMarker>
                  </>

                }
                onClickFunction={runGoToPage}
                id={ navRouteName.lastHeadLine.id }
              />
            </specificBtnStyle.lastNavPageContainer>

     
        </NavBarStyle.topBarContainer>
        
        </>
        <>

        </>
      </>
    );
  }