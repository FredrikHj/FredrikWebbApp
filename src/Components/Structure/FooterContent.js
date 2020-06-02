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
          <FooterStyle.col1>Copyright: Fredrik Hjärpe</FooterStyle.col1>
   {/*        <a href="data_struktur/kontakt_form.html" title="Kontakt formulär"><img class="contact_form" src="data_struktur/bilder/contact_form.png" titl="" alt="Kontakt formulär!"></a>
 */}
          <FooterStyle.col2>Kontakt formulär!</FooterStyle.col2>
          <FooterStyle.col3>{ addDateTime }</FooterStyle.col3>
        </>

    );
  }

export default FooterContent;