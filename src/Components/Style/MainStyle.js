/* ================================================== General Style Rouls ==================================================
Imports module */
import styled from 'styled-components';
import { color } from'./CommonCSSRoules';

export let MainStyle = {
  body: styled.section`
    margin-top: -8px;
    margin-left: calc(50% - 690px);
    width: 1380px;
    height: 0px;
    -webkit-box-shadow: -53px -33px 294px 200px rgba(0,0,0,0.75);
    -moz-box-shadow: -53px -33px 294px 200px rgba(0,0,0,0.75);
    box-shadow: -53px -33px 294px 200px rgba(0,0,0,0.75);
    color: white;
    `,
}
export let MainContentStyle = {
  header: styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 75px;
    background-color: none;
  `,
  headerEndLine: styled.section`
    width: 90%;
    position: relative;
    height: 20px;
    left: 138px;
    top: 0px;
    background-color: ${color.darkOrange};
  `,
  contentsNavBar: styled.section`
    width: 200px;
    `,
  innerContentsContainer: styled.section`
    width: 1100px;
    `,
}
export let PageMainContainerStyle = {
  mainPage: styled.section`
    display: flex;
    width: 1225px;
    flex-direction: column;
    margin-left: 75px;
    margin-top: 90px;
    background-color: ${color.darkBlackDarkGreen};
    border-radius: 70px;
  `,
}
export let SubPageContainerStyle = {
  outerContentsContainer: styled.section`
    display: flex;
    flex-direction: column;
    margin-top: -10px;
  `,
  container: styled.section`
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-top: 100px;
  `,
  sidebar: styled.section`
    display: flex;
    width: 30%;
    flex-direction: column;
    align-items: center;
    background-color: ${color.darkOrange};
    border-radius: 70px 0 0 70px;
    padding-bottom: 50px;
    margin-left: 75px;
  `,
  mainContent: styled.section`
    display: flex;
    width: 810px;
    flex-direction: column;
    align-items: center;
    background-color: ${color.darkBlackDarkGreen};
    border-radius: 0 70px 70px 0;
  `,
  textParagraph: styled.section`
    width: 80%;
    margin-left: calc(50% - 500px);
    font-size: 15px;
  `,
}
export let HeaderStyle = {
  appLogoNoLink: styled.img`
    position: relative;
    left: 0;
    width: 16.5%;
    height: 158%;
  `,
  appLogoLink: styled.img`
    position: relative;
    left: 0;
    width: 80%;
    background:none !important;
  `,
}
export let FooterStyle = {
  footerContainer: styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1380px;
    height: 100px;
    color: black;
    position: fixed;
    bottom: 0;
    `,
  col1: styled.h2`
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    `,
  col2: styled.h2`
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    `,
  col3: styled.h2`
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    `,
}
