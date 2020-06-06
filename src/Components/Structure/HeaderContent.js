/* ================================================== HeaderPage ==================================================
Imports module */
import { useSelector, useDispatch } from'react-redux';
import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Link } from "react-router-dom";

// Style
import { NavBarStyle, specificBtnStyle } from'../Style/NavBarStyle';
import { HeaderStyle  } from '../Style/MainStyle';
import { updateGotoPage } from'../Data/Storage';

// Generall components
import { changeAppUrl } from'../Data/Redux/Actions/ActionChangeAppUrl';
import  fredrikLogo from'../Data/bilder/logga_small.png';
import { Button } from'../Data/Button';

const HeaderContent = () => {
  let [ appName, updateAppName ] = useState('');
  let [ urlChanged, updateUrlChanged ] = useState(false);
  let [ redirectionPath, updateRedirectionPath ] = useState('');
  let [ currentUrl, updateCurrentUrl ] = useState('');

  //let [ correctAppUrl, setCorrectAppUrl ] = useState('');
  const getUrlState = useSelector(state => state);
  const dispatch = useDispatch();    
  useEffect(() => {
    updateAppName('Fredrik Webbpage');
    //if (redirectionPath !== currentUrl) 
    dispatch(changeAppUrl());
    //if (redirectionPath === currentUrl) return;
  },[ appName, redirectionPath ]);

  console.log("HeaderContent -> redirection", redirectionPath)
  console.log("HeaderContent -> currentUrl", currentUrl)
    const runGoToPage = (e) => {
        const targetPage = e.target.id;
        updateCurrentUrl(targetPage);

        updateGotoPage(targetPage);
        updateUrlChanged(true);
        updateRedirectionPath(targetPage);
    }
    console.log("HeaderContent -> getUrlState", getUrlState)
    return (
      <>
          <>
              {(getUrlState !== '/Welcome') 
                ? <Link to="/Welcome">
                    <HeaderStyle.appLogoLink src={ fredrikLogo } alt="Fredriks logga!"/>
                  </Link>
                : <HeaderStyle.appLogoNoLink src={ fredrikLogo } alt="Fredriks logga!"/>
              }
              <NavBarStyle.topBarContainer>
                {/* {correctAppUrl === true && <span class="material-icons" style={ homeSymbolStyle }>home</span>} */}
                  <Button
                    name={ 'Webbtjänster' }
                    onClickFunction={ runGoToPage }
                    id={ 'webbServices' }
                    btnOptional={ '' }
                  />
                  <Button
                    name={ '???' }
                    onClickFunction={ runGoToPage }
                    id={ '' }
                    btnOptional={ '' }
                  />
                  <Button
                    name={ '???' }
                    onClickFunction={ runGoToPage }
                    id={ '' }
                    btnOptional={ '' }
                  />
    {/*<li><a id="m1" href="#Vad är 3d" onclick="n1HM1()">Vad är 3d</a></li>*/}
              </NavBarStyle.topBarContainer>
          </>
          <>

          </>
        </>
    );
  }
export default HeaderContent;