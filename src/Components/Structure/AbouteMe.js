/* ================================================== FirstPage ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// Style
import { CommonBtnStyle, specificBtnStyle } from'../Style/NavBarStyle';
import { MainContentStyle, PageMainContainerStyle } from'../Style/MainStyle';
import { CommonTextStyle } from'../Style/TextStyle';

// Generall components
import { incommingTextObj$ } from'../Data/Storage';
import Spinner from '../Data/Spinner.js';
import { Button } from'../Data/Button';
import { runGoToPage } from'../Data/CommonFunctions';
import { HeaderContent } from'./HeaderContent';
import { navRouteName } from'../Data/NavRouteName';

export const AbouteMe = () => {
    const [ textObj, updateTextObj ] = useState('');
    const [ newTextObj, updateNewTextObj ] = useState(true);

    useEffect(() => {
      if (newTextObj === true) {
        incommingTextObj$.subscribe((incommingTextObj) => {
        console.log("MainPage -> incommingTextObj", incommingTextObj)
          if (newTextObj === true){
            updateTextObj(incommingTextObj.aboutMe);
            updateNewTextObj(false);
          }
        });
      }
    }, [newTextObj, textObj]);
    return (
      <>
        <MainContentStyle.header>
          <HeaderContent/>
        </MainContentStyle.header>
        <MainContentStyle.headerEndLine></MainContentStyle.headerEndLine>
        <PageMainContainerStyle.mainPage>
          <CommonTextStyle.headLines>
            Om Mig
          </CommonTextStyle.headLines>
          <CommonTextStyle.textParagraph>
            {(textObj !== undefined)
              ?  'Text kommer snart ...................' //`${textObj}`
            : <Spinner str={'Text laddas'}/>
            } 
          </CommonTextStyle.textParagraph>
        </PageMainContainerStyle.mainPage>
      </>
    );
  }