/* ================================================== HeadBar ==================================================
Imports module */
import React from 'react';

// Import inportant components for the specific page
import { CommonBtnStyle } from '../Style/NavBarStyle';

export let Button = (props) => {
    const { groupName, styleBtn, content, onClickFunction, id } = props;
    console.log("Button -> props", props)
    return(
        <>
            <CommonBtnStyle.btn id={ id } onClick={ onClickFunction } style={ styleBtn }>
               { content }
            </CommonBtnStyle.btn>
        </>
    );
}