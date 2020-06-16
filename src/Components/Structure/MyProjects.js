/* ================================================== FirstPage ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Link } from "react-router-dom";

// Style
import { CommonBtnStyle, specificBtnStyle } from'../Style/NavBarStyle';
import { MainContentStyle, SubPageContainerStyle } from'../Style/MainStyle';
import { CommonTextStyle } from'../Style/TextStyle';

// Generall components
import { incommingTextObj$ } from'../Data/Storage';
import { gotoPage$ } from'../Data/Storage';
import Spinner from '../Data/Spinner.js';
import { Button } from'../Data/Button';
import { runGoToPage } from'../Data/CommonFunctions';
import HeaderContent from'./HeaderContent';
import { navRouteName } from'../Data/NavRouteName';

export const MyProjects = () => {
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
        //setPageRoute(navRouteName.headLine[1].gotoPage]);
      });
    }, [newTextObj, textObj]);
    return (
      <>
        <MainContentStyle.header>
          <HeaderContent/>
        </MainContentStyle.header>
        <MainContentStyle.headerEndLine></MainContentStyle.headerEndLine>
        <SubPageContainerStyle.container>
          <SubPageContainerStyle.sidebar>
            <Button
              styleBtn={ specificBtnStyle.sideBarBtn }
              content={ <CommonBtnStyle.btnHeadline id={ navRouteName.headLine1.subHead.headLine1.id } onClick={ runGoToPage } style={ specificBtnStyle.lastNavPage }>{ navRouteName.headLine1.subHead.headLine1.name }</CommonBtnStyle.btnHeadline> }
              onClickFunction={runGoToPage}
              id={ navRouteName.headLine1.subHead.headLine1.id }
            />
            <Button
              styleBtn={ specificBtnStyle.sideBarBtn }
              content={ <CommonBtnStyle.btnHeadline id={ navRouteName.headLine1.subHead.headLine2.id } onClick={ runGoToPage } style={ specificBtnStyle.lastNavPage }>{ navRouteName.headLine1.subHead.headLine2.name }</CommonBtnStyle.btnHeadline> }
              onClickFunction={runGoToPage}
              id={ navRouteName.headLine1.subHead.headLine2.id }
            />
            <Button
              styleBtn={ specificBtnStyle.sideBarBtn }
              content={ <CommonBtnStyle.btnHeadline id={ navRouteName.headLine1.subHead.headLine3.id } onClick={ runGoToPage } style={ specificBtnStyle.lastNavPage }>{ navRouteName.headLine1.subHead.headLine3.name }</CommonBtnStyle.btnHeadline> }
              onClickFunction={runGoToPage}
              id={ navRouteName.headLine1.subHead.headLine3.id }
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