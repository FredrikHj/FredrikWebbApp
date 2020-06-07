/* ================================================== MainPage ==================================================
Imports module */
import { useSelector, useDispatch } from'react-redux';
import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Link } from "react-router-dom";

// Style

// Generall components

export const MainPage = (props) => {
  const [ incommingTextObj, updateIncommingTextObj ] = useState(null);
  const getTextObj = useSelector(state => state);
  
  useEffect(() => {
    if(incommingTextObj === null) updateIncommingTextObj(getTextObj);
  }, [ incommingTextObj ]); 
  
  console.log("MainPage -> incommingTextObj", getTextObj)
  console.log("MainPage -> incommingTextObj", incommingTextObj)
    return (
    <>
      <>
        Välkommen In
      
      </>
      <>wesfwefwerf</>
    </>
  );
}