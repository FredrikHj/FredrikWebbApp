/* ================================================== General Style Rouls ==================================================
Imports module */
import styled from 'styled-components';
import { color } from'./CommonCSSRoules';
import { responsiveDevice } from './Responsive';

export let MainStyle = {
  body: styled.section`
    margin-top: -8px;
    width: 1380px;
    color: white;
    margin-left: calc(50% - 690px);
    @media ${responsiveDevice.mobile} {
      margin-left: 0;
    }
  `,
}
export let MainContentStyle = {
  header: styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 75px;
    background-color: none;
    @media ${responsiveDevice.mobile} {
      margin-left: 0;
      height: 250px;
    }
  `,
  headerEndLine: styled.section`
    width: 90%;
    position: relative;
    height: 20px;
    left: 138px;
    top: 0px;
    background-color: ${color.darkOrange};
    @media ${responsiveDevice.mobile} {
      width: 100%;
      margin-left: -70px;
      margin-top: 150px;
    }
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
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    background-color: ${color.darkBlackDarkGreen};
    width: 1225px;
    margin-left: 75px;
    border-radius: 70px;
    @media ${responsiveDevice.mobile} {
      margin-left: 110px;
      margin-top: 150px;
      font-size: 2em;
      height: 1200px;
    }
    @media ${responsiveDevice.laptop} {
      height: 450px
    }
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
    margin-bottom: 90px;
    font-size: 1.2em;
    white-space: pre;
    word-break: break-all;
  `,
}
export let HeaderStyle = {
  appLogoNoLink: styled.img`
    position: relative;
    left: 0;
    width: 16.5%;
    height: 158%;
    @media ${responsiveDevice.mobile} {
      display: none;
    }
  `,
  appLogoLink: styled.img`
    position: relative;
    left: 0;
    width: 80%;
    @media ${responsiveDevice.mobile} {
      display: none;
    }
  `,
  portrait: styled.img`
    margin-top: 10px;
    margin-left: -150px;
    width: 5%;
    height: 70%;
    border-radius: 50px;
    @media ${responsiveDevice.mobile} {
      margin-left: 10px;
      width: 25%;
      height: 150%;
    }
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
    bottom: 0px;
    @media ${responsiveDevice.mobile} {
      margin-left: 140px;
      width: 1150px;
      font-size: 2em;
    }
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