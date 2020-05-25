/* ================================================== FooterPage ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Link } from "react-router-dom";

// Style
import { MainContentStyle  } from '../Style/MainStyle';

// Generall components


const FooterContent = () => {
    let [ appName, updateAppName ] = useState('');
    useEffect(() => {
      updateAppName('Fredrik Webbpage');
    },[ appName ]);
    return (
        <>
          <>
          </>

          <>
          </>

          <>
          </>
        </>

    );
  }

export default FooterContent;