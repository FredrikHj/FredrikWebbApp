/* ================================================== Text Style Rouls ==================================================
Imports module */
import styled from 'styled-components';

export let CommonTextStyle = {
  headLines: styled.h1`
    font-size: 30px;
    width: 100%;
    text-align: center;
    /* margin-left: calc(50% - 100px); */
  `,
  textParagraph: styled.p`
    margin-left: calc(50% - 500px);
    margin-bottom: 90px;
    font-size: 1.2em;
    white-space: pre;
    word-break: break-all;
`,
};