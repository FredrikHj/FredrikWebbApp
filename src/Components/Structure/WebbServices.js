/* ================================================== FirstPage ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Link } from "react-router-dom";

// Style
import { PageContainerStyle } from'../Style/MainStyle';
import { CommonTextStyle } from'../Style/TextStyle';
// Generall components
import { incommingTextObj$ } from'../Data/Storage';
import { axiosGet } from '../Data/Axios';

export const WebbServices = () => {
    const [ textObj, updateTextObj ] = useState('');
    const [ newTextObj, updateNewTextObj ] = useState(true);
    useEffect(() => {
      if (newTextObj === true) 
      incommingTextObj$.subscribe((incommingTextObj) => {
      console.log("MainPage -> incommingTextObj", incommingTextObj)
        if (newTextObj === true){
          updateTextObj(incommingTextObj.services);
          updateNewTextObj(false);
        }
      });
    }, [newTextObj, textObj]);
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