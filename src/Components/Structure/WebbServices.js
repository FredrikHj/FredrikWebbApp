/* ================================================== FirstPage ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Link } from "react-router-dom";

// Style
import { CommonBtnStyle, specificBtnStyle } from'../Style/NavBarStyle';
import { SubPageContainerStyle } from'../Style/MainStyle';
import { CommonTextStyle } from'../Style/TextStyle';

// Generall components
import { incommingTextObj$ } from'../Data/Storage';
import { gotoPage$ } from'../Data/Storage';
import { routeName } from'../Data/RouteNames';
import Spinner from '../Data/Spinner.js';
import { Button } from'../Data/Button';
import { runGoToSubPage } from'../Data/SubPageFunctions';

export const WebbServices = () => {
    const [ textObj, updateTextObj ] = useState('');
    const [ newTextObj, updateNewTextObj ] = useState(true);
    const [ pageRoute, setPageRoute ] = useState('');

    useEffect(() => {
      if (newTextObj === true) {
        incommingTextObj$.subscribe((incommingTextObj) => {
        console.log("MainPage -> incommingTextObj", incommingTextObj)
          if (newTextObj === true){
            updateTextObj(incommingTextObj.services);
            updateNewTextObj(false);
          }
        });
      }
      gotoPage$.subscribe((gotoPage) => {
        console.log("MainApp -> gotoPage", gotoPage)
        setPageRoute(routeName[gotoPage]);
      });
    }, [newTextObj, textObj]);
    return (
        <SubPageContainerStyle.container>
          <CommonTextStyle.headLines>
            {pageRoute}
          </CommonTextStyle.headLines>
          <SubPageContainerStyle.sidebar>
            <Button
              content={ <CommonBtnStyle.btnHeadline id={ 'webbServices' } onClick={ runGoToSubPage } style={ specificBtnStyle.lastNavPage }>Webbutveckling</CommonBtnStyle.btnHeadline> }
              onClickFunction={runGoToSubPage}
              id={ 'webbServices' }
              styleBtn={ specificBtnStyle.sideBarBtn }
            />
            <Button
              content={ <CommonBtnStyle.btnHeadline id={ 'webbServices' } onClick={ runGoToSubPage } style={ specificBtnStyle.lastNavPage }>3D Modell</CommonBtnStyle.btnHeadline> }
              onClickFunction={runGoToSubPage}
              id={ 'webbServices' }
              styleBtn={ specificBtnStyle.sideBarBtn }
            />
          </SubPageContainerStyle.sidebar>
          <SubPageContainerStyle.mainContent>
            <CommonTextStyle.textParagraph>
              {(textObj !== undefined)
                ?  `${textObj}`
                : <Spinner str={'Text laddas'}/>
              } 
            </CommonTextStyle.textParagraph>
          </SubPageContainerStyle.mainContent>
        </SubPageContainerStyle.container>

    );
  }