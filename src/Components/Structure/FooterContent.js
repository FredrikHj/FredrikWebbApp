/* ================================================== FooterPage ==================================================
Imports module */
import React, { useState, useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter as Router, Link } from "react-router-dom";

// Style
import { FooterStyle } from '../Style/MainStyle';
import { startDateTime } from'../Data/DateTime';

// Generall components


const FooterContent = () => {
    let [ appName, updateAppName ] = useState('');
    let [ addDateTime ] = useState(startDateTime());

    useEffect(() => {
      updateAppName('Fredrik Webbpage');
    },[ appName ]);
    return (
        <>
          <FooterStyle.col>Copyright: Fredrik Hjärpe</FooterStyle.col>
   {/*        <a href="data_struktur/kontakt_form.html" title="Kontakt formulär"><img class="contact_form" src="data_struktur/bilder/contact_form.png" titl="" alt="Kontakt formulär!"></a>
 */}
          <FooterStyle.col>{/* Kontakt formulär! */}</FooterStyle.col>
          <FooterStyle.col>{ addDateTime }</FooterStyle.col>
        </>

    );
  }

export default FooterContent;