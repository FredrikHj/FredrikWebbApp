/* ================================================== MainPage ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Link } from "react-router-dom";

// Style
import { MainContentStyle, PageMainContainerStyle } from'./Components/Style/MainStyle';
import { CommonTextStyle } from'./Components/Style/TextStyle';
import { specificBtnStyle, CommonBtnStyle } from'./Components/Style/NavBarStyle';

// Generall components
import HeaderContent from'./Components/Structure/HeaderContent';
import { runGoToPage } from'./Components/Data/CommonFunctions';
import { incommingTextObj$ } from'./Components/Data/Storage';
import Spinner from './Components/Data/Spinner.js';
import { navHeadLine } from'./Components/Data/NavHeadlines';
import { Button } from'./Components/Data/Button';

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
  
  console.log("MainPage -> incommingTextObj", typeof textObj)
  
  return (
    <>
      <MainContentStyle.header>
        <HeaderContent
          content={ 
            <>
              <Button
                styleBtn={ specificBtnStyle.btnInactive }
                content={ <CommonBtnStyle.btnHeadline id={ 'webbServices' } onClick={ runGoToPage } data-optional={ runGoToPage } style={ specificBtnStyle.lastNavPage }>{ navHeadLine.line1.str }</CommonBtnStyle.btnHeadline> }
                onClickFunction={runGoToPage}
                id={ navHeadLine.line1.str }
              />
              <Button
                styleBtn={ specificBtnStyle.btnInactive }
                content={ <CommonBtnStyle.btnHeadline onClick={ runGoToPage } data-optional={ runGoToPage } style={ specificBtnStyle.lastNavPage }>{ navHeadLine.line2.str }</CommonBtnStyle.btnHeadline> }
                onClickFunction={runGoToPage}
                id={ navHeadLine.line2.str }
              />
              <Button
                styleBtn={ specificBtnStyle.btnInactive }
                content={ <CommonBtnStyle.btnHeadline onClick={ runGoToPage } data-optional={ runGoToPage } style={ specificBtnStyle.lastNavPage }>???</CommonBtnStyle.btnHeadline> }
                onClickFunction={runGoToPage}
              />
            </>
          }
        />
      </MainContentStyle.header>
      <MainContentStyle.headerEndLine></MainContentStyle.headerEndLine>
      <PageMainContainerStyle.mainPage>
        <CommonTextStyle.headLines>
          Välkommen In
        </CommonTextStyle.headLines>
        <CommonTextStyle.textParagraph>
          {(textObj !== undefined)
            ?  `${textObj}`
          : <Spinner str={'Text laddas'}/>
          } 
        </CommonTextStyle.textParagraph>
      </PageMainContainerStyle.mainPage>
    </>
  );
}