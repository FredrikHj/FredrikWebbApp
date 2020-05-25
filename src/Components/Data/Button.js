/* ================================================== HeadBar ==================================================
Imports module */
import React from 'react';

// Import inportant components for the specific page
import { CommonBtnStyle } from '../Style/MainStyle';

export let Button = (props) => {
    const {btnOptional, style, name, onClickFunction, id } = props;
    return(
        <>
            <CommonBtnStyle.btn  id={ id } onClick={ onClickFunction } style={ style.btn }>
                <CommonBtnStyle.btnHeadline id={ id } onClick={ onClickFunction } data-optional={ btnOptional } style={ style.text }>{ name }</CommonBtnStyle.btnHeadline>
            </CommonBtnStyle.btn>
        </>
    );
}