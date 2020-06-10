/* ================================================== General Style Rouls ==================================================
Imports module */
import styled from 'styled-components';

export let MainStyle = {
  body: styled.section`
    margin-top: 0;
    margin-left: calc(50% - 690px);
    width: 1380px;
    height: 98vh;
    -webkit-box-shadow: -53px -33px 294px 200px rgba(0,0,0,0.75);
    -moz-box-shadow: -53px -33px 294px 200px rgba(0,0,0,0.75);
    box-shadow: -53px -33px 294px 200px rgba(0,0,0,0.75);
    color: black;
    `,
}
export let MainContentStyle = {
  header: styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 75px;
    background-color: white
  `,
  headerEndLine: styled.section`
    position: relative;
    width: 95%;
    float: right;
    height: 20px;
    margin-top: 8px;
    background-color: rgb(255, 140, 0);
    `,
  outerContentsContainer: styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 100px;
    `,
  contentsNavBar: styled.section`
    width: 200px;
    `,
  innerContentsContainer: styled.section`
    width: 1100px;
    `,
  
}
export let PageContainerStyle = {
  mainPage: styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
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
  `,
}
export let FooterStyle = {
  footerContainer: styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1380px;
    height: 100px;
    background-color: #333; color: rgb(255, 255, 255);
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
