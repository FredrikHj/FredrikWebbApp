/* ================================================== Text Style Rouls ==================================================
Imports module */
import styled from 'styled-components';
import { responsiveDevice } from './Responsive';

export let CommonTextStyle = {
  headLines: styled.h1`
    font-size: 2em;
    width: 100%;
    text-align: center;
    @media ${responsiveDevice.mobile} {
      font-size: 2.5em;
    }
  `,
  textParagraph: styled.p`
    margin-left: calc(50% - 500px);
    margin-top: -10px;
    margin-bottom: 10px;
    font-size: 1.2em;
    white-space: pre-wrap;

    @media ${responsiveDevice.mobile} {
      margin-left: 50px;
      font-size: 1.3em;
      overflow-y: auto;
      height: 900px;
      width: 90%;
    }
    @media ${responsiveDevice.laptop} {
      margin-top: -20px;
      overflow-y: auto;
      height: 450px
    }
  `,
};