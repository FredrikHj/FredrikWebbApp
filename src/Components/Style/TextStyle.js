/* ================================================== Text Style Rouls ==================================================
Imports module */
import styled from 'styled-components';
import { responsiveDevice } from './Responsive';

export let CommonTextStyle = {
  headLines: styled.h1`
    font-size: 2.3em;
    width: 100%;
    text-align: center;
/*     @media ${responsiveDevice.mobile} {
      font-size: 2.5em;
    } */
  `,
  textParagraph: styled.p`
    width: 95%;
    margin-left: 2%;
    margin-top: -1%;
    margin-bottom: 5%;
    font-size: 2em;
    white-space: pre-wrap;
    overflow-y: auto;

/* 
    @media ${responsiveDevice.mobile} {
      margin-left: 50px;
      font-size: 1.3em;
      height: 900px;
      width: 90%;
    }
    @media ${responsiveDevice.laptop} {
      margin-top: -20px;
      overflow-y: auto;
      height: 450px
    } */
  `,
};