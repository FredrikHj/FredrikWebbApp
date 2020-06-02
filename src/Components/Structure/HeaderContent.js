/* ================================================== HeaderPage ==================================================
Imports module */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from'react-redux';
import { changeAppUrl } from'../Data/Redux/Actions';

// React Router - ES6 modules
import { BrowserRouter as Router, Link } from "react-router-dom";

// Style
import { HeaderStyle  } from '../Style/MainStyle';
import { homeSymbolStyle } from'../Style/SpecificStyle';
import { updateGotoPage, appUrl$ } from'../Data/Storage';

// Generall components
import { Button } from'../Data/Button';
import  fredrikLogo from'../Data/bilder/logga_small.png';

const HeaderContent = () => {
  let [ appName, updateAppName ] = useState('');
  let [ urlChanged, updateUrlChanged ] = useState(false);
  let [ redirectionPath, updateRedirectionPath ] = useState('');
  let [ currentUrl, updateCurrentUrl ] = useState('');

  //let [ correctAppUrl, setCorrectAppUrl ] = useState('');
  const storeAppUrl = useSelector(state => state.appUrl);
  console.log("HeaderContent -> updateAppUrl", storeAppUrl)
  console.log("changeAppUrl", changeAppUrl())
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
    return (
        <>
            <HeaderStyle.headline>
              <img src={ fredrikLogo } alt="Fredriks logga!"/></HeaderStyle.headline>
              <HeaderStyle.topBarContent>{ storeAppUrl }
                {/* {correctAppUrl === true && <span class="material-icons" style={ homeSymbolStyle }>home</span>} */}
                  <Button
                      style={ '' }
                      name={ 'Fredriks Webbtjänster' }
                      onClickFunction={ runGoToPage }
                      id={ 'webbServices' }
                      btnOptional={ '' }
                      />
              </HeaderStyle.topBarContent>
  {/*         <li><a id="m1" href="#Vad är 3d" onclick="n1HM1()">Vad är 3d</a></li>
              <li><a id="m2" href="#Tjänster & Produkter" onclick="n1HM2();">Tjänster & Produkter</a></li>
              <li><a id="m3" href="#Om" onclick="n1HM3();">Om</a></li>
              <li><a id="m4" href="#Anpassa Sidan" onclick="n1HM4();">Anpassa sidan</a></li>
*/}
        </>
    );
  }
export default HeaderContent;