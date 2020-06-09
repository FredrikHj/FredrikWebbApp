/* ================================================== MainPage ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Link } from "react-router-dom";

// Style

// Generall components
import { incommingTextObj$ } from'./Components/Data/Storage';
import { axiosGet } from './Components/Data/Axios';

export const MainPage = () => {
  const [ textObj, updateTextObj ] = useState({});
  const [ newTextObj, updateNewTextObj ] = useState(true);
  useEffect(() => {
    if (newTextObj === true) setInterval(() => {axiosGet('textMain');}, 2000);
    incommingTextObj$.subscribe((incommingTextObj) => {
      if (newTextObj === true){
        updateTextObj(incommingTextObj);
        updateNewTextObj(false);
      }
    });
  }, [newTextObj]);
  
   console.log("MainPage -> incommingTextObj", textObj)
  
    return (
    <>
      <>
        Välkommen In
      </>
      <>
        {textObj.welcome} 
      </>
    </>
  );
}