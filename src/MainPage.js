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
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("MainPage -> axiosGet('GetText')", axiosGet('GetText'))
    dispatch(saveTextResp(axiosGet('GetText')));
  }); 
  return (
    <>
      <>Välkommen In</>
      <>wesfwefwerf</>

    </>
  );
}