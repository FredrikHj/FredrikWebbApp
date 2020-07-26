/* ================================================== MainPage ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Link } from "react-router-dom";
import Iframe from 'react-iframe';

// Style
import { MainContentStyle, PageMainContainerStyle } from'./Components/Style/MainStyle';
import { CommonTextStyle } from'./Components/Style/TextStyle';
import { specificBtnStyle, CommonBtnStyle } from'./Components/Style/NavBarStyle';

// Generall components
import { HeaderContent } from'./Components/Structure/HeaderContent';
import { incommingTextObj$ } from'./Components/Data/Storage';
import Spinner from './Components/Data/Spinner.js';
import { navRouteName } from'./Components/Data/NavRouteName';
let test = 'fe<br/>awsf';

export const MainPage = () => {
  const [ textObj, updateTextObj ] = useState('');
  const [ newTextObj, updateNewTextObj ] = useState(true);
  useEffect(() => {
    if (newTextObj === true) 

    incommingTextObj$.subscribe((incommingTextObj) => {
    console.log("MainPage -> incommingTextObj", incommingTextObj.textMain)
      if (newTextObj === true){
        updateTextObj(incommingTextObj.textMain);
        updateNewTextObj(false);
      }
    });
  }, [newTextObj, textObj]);
/*   let fixStrParagraph = (incommingTextStr) => {
    let sendText = '';
    sendText = incommingTextStr.replace('<br/><br/>', document.write("<br/><br/>");
    console.log("fixStrParagraph -> incommingTextStr", sendText)

    return sendText;
  } */
  console.log("MainPage -> incommingTextObj", textObj)
  //` Text kommer snart <br/> <br/><br/>................... //
  
  return (
    <>
      <MainContentStyle.header>
        <HeaderContent/>
      </MainContentStyle.header>
      <MainContentStyle.headerEndLine></MainContentStyle.headerEndLine>
      <PageMainContainerStyle.mainPage>
        <CommonTextStyle.headLines>
          Välkommen
        </CommonTextStyle.headLines>
        <CommonTextStyle.textParagraph>
          {(textObj !== undefined)
            ? textObj
            : <Spinner str={'Text laddas'}/>
          }
        </CommonTextStyle.textParagraph>
      </PageMainContainerStyle.mainPage>
    </>
  );
}