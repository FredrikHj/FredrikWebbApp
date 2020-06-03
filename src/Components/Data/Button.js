/* ================================================== HeadBar ==================================================
Imports module */
import React from 'react';

// Import inportant components for the specific page
import { CommonBtnStyle } from '../Style/NavBarStyle';

export let Button = (props) => {
    const {btnOptional, styleBtn, styleText, name, onClickFunction, id } = props;
    return(
        <>
            <CommonBtnStyle.btn  id={ id } onClick={ onClickFunction } style={ styleBtn }>
                <CommonBtnStyle.btnHeadline id={ id } onClick={ onClickFunction } data-optional={ btnOptional } style={ styleText }>{ name }</CommonBtnStyle.btnHeadline>
            </CommonBtnStyle.btn>
        </>
    );
}