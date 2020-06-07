/* ================================================== MainPage ==================================================
Imports module */
import { useSelector, useDispatch } from'react-redux';
import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Link } from "react-router-dom";

// Style

// Generall components
import { saveTextResp } from'./Components/Data/Redux/Actions/ActionUpdateTextResp';
import { axiosGet } from './Components/Data/Axios';

export const MainPage = () => {
  const getTextObj = useSelector(state => state);
  const dispatch = useDispatch();
  const [ incommingText, updateIncommingText ] = useState({});
  useEffect(() => {
    console.log("MainPage -> axiosGet('GetText')", axiosGet('GetText'))
    dispatch(saveTextResp(axiosGet('GetText')));
    if (incommingText === {}) updateIncommingText(getTextObj);
  }); 
  console.log("MainPage -> incommingText", incommingText)
  return (
    <>
      <>Välkommen In</>
      <>wesfwefwerf</>
    </>
  );
}