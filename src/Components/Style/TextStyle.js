/* ================================================== Text Style Rouls ==================================================
Imports module */
import styled from 'styled-components';

export let CommonTextStyle = {
  headLines: styled.h1`
    font-size: 30px;
    width: 100%;
    text-align: center;
  `,
  textParagraph: styled.p`
    margin-left: calc(50% - 500px);
    margin-top: -10px;
    margin-bottom: 10px;
    font-size: 1.2em;
    white-space: pre;
    word-break: break-all;
  `,
};