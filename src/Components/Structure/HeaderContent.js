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
            <HeaderStyle.headline>{ appName }</HeaderStyle.headline>
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
        </>
    );
  }
export default HeaderContent;