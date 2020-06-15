/* ================================================== FirstPage ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Link } from "react-router-dom";

// Style
import { CommonBtnStyle, specificBtnStyle } from'../Style/NavBarStyle';
import { MainContentStyle, SubPageContainerStyle } from'../Style/MainStyle';
import { CommonTextStyle } from'../Style/TextStyle';
import { navHeadLine } from'../Data/NavHeadlines';

// Generall components
import { incommingTextObj$ } from'../Data/Storage';
import { gotoPage$ } from'../Data/Storage';
import { routeName } from'../Data/RouteNames';
import Spinner from '../Data/Spinner.js';
import { Button } from'../Data/Button';
import { runGoToPage } from'../Data/CommonFunctions';
import HeaderContent from'../Structure/HeaderContent';

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
      <>
        <MainContentStyle.header>
          <HeaderContent
            content={ 
              <>
                <Button
                  styleBtn={ specificBtnStyle.btnActive }
                  content={ 
                    <>
                      <CommonBtnStyle.btnHeadline id={ 'webbServices' } onClick={ runGoToPage } style={ specificBtnStyle.lastNavPage }>{ navHeadLine.line1.str }</CommonBtnStyle.btnHeadline> 
                      <CommonBtnStyle.btnMarker></CommonBtnStyle.btnMarker>                  
                    </>
                  }
                  onClickFunction={runGoToPage}
                  id={ navHeadLine.line1.str }
                />
                <Button
                  styleBtn={ specificBtnStyle.btnInactive }
                  content={ <CommonBtnStyle.btnHeadline onClick={ runGoToPage } style={ specificBtnStyle.lastNavPage }>{ navHeadLine.line2.str }</CommonBtnStyle.btnHeadline> }
                  onClickFunction={runGoToPage}
                />
                <Button
                  styleBtn={ specificBtnStyle.btnInactive }
                  content={ <CommonBtnStyle.btnHeadline onClick={ runGoToPage } style={ specificBtnStyle.lastNavPage }>???</CommonBtnStyle.btnHeadline> }
                  onClickFunction={runGoToPage}
                />
              </>
            }
          />
        </MainContentStyle.header>
        <MainContentStyle.headerEndLine></MainContentStyle.headerEndLine>
        <SubPageContainerStyle.container>
          <SubPageContainerStyle.sidebar>
            <Button
              styleBtn={ specificBtnStyle.sideBarBtn }
              content={ <CommonBtnStyle.btnHeadline id={ 'webbServices' } onClick={ runGoToPage } style={ specificBtnStyle.lastNavPage }>{ navHeadLine.line1.subHead.line1 }</CommonBtnStyle.btnHeadline> }
              onClickFunction={runGoToPage}
              id={ 'webbServices' }
            />
            <Button
              styleBtn={ specificBtnStyle.sideBarBtn }
              content={ <CommonBtnStyle.btnHeadline id={ 'webbServices' } onClick={ runGoToPage } style={ specificBtnStyle.lastNavPage }>3D Modell</CommonBtnStyle.btnHeadline> }
              onClickFunction={runGoToPage}
              id={ 'webbServices' }
            />
          </SubPageContainerStyle.sidebar>
          <SubPageContainerStyle.mainContent>
          <CommonTextStyle.headLines>
            Webbtjänster
          </CommonTextStyle.headLines>
            <SubPageContainerStyle.textParagraph>
              {(textObj !== undefined)
                ?  `${textObj}`
                : <Spinner str={'Text laddas'}/>
              } 
            </SubPageContainerStyle.textParagraph>
          </SubPageContainerStyle.mainContent>
        </SubPageContainerStyle.container>
      </>
    );
  }