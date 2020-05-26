/* ================================================== HeaderPage ==================================================
Imports module */
import React, { useState, useEffect } from 'react';


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
    //let [ correctAppUrl, setCorrectAppUrl ] = useState('');
    
    useEffect(() => {
      updateAppName('Fredrik Webbpage');
      /* setAppUrl();
      appUrl$.subscribe((gotoPage) => {
        console.log("MainContent -> gotoPage", appUrl)
        setPageRoute(routeName[gotoPage]);
      }); */
    },[ appName ]);
    const runGoToPage = (e) => {
        updateGotoPage(e.target.id);
    }
    return (
        <>
            <HeaderStyle.headline>{ appName }</HeaderStyle.headline>
            <HeaderStyle.topBarContent>
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