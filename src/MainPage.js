/* ================================================== MainPage ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Link } from "react-router-dom";

// Style
import { PageContainerStyle } from'./Components/Style/MainStyle';
import { CommonTextStyle } from'./Components/Style/TextStyle';

// Generall components
import { incommingTextObj$ } from'./Components/Data/Storage';
import { axiosGet } from './Components/Data/Axios';

let getText;
export const MainPage = () => {
  const [ textObj, updateTextObj ] = useState('');
  const [ newTextObj, updateNewTextObj ] = useState(true);
  useEffect(() => {
    if (newTextObj === true) 
/*     getText = setInterval(() => {
      axiosGet('textMain');
    }, 500); */
  
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
    <PageContainerStyle.mainPage>
      <CommonTextStyle.headLines>
        Välkommen In
      </CommonTextStyle.headLines>
      <CommonTextStyle.textParagraph>
        {(textObj !== undefined)
          ?  `${textObj}`
          : 'Text inte mottagen'
        } 
      </CommonTextStyle.textParagraph>
    </PageContainerStyle.mainPage>
  );
}