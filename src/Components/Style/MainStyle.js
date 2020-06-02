/* ================================================== Style Rouls for Auth ==================================================
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
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 75px;
    background-color: white
  `,
  headerEndLine: styled.section`
    width: 100%;
    height: 20px;
    margin-top: 0;
    background-color: rgb(255, 140, 0);
    `,
  outerContentsContainer: styled.section`
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 100px;
    `,
  contentsNavBar: styled.section`
    border: 1px solid red;
    width: 200px;
    `,
  innerContentsContainer: styled.section`
    border: 1px solid red;
    width: 1100px;
    `,
}
export let FooterStyle = {
  footerContainer: styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid red;
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
export let HeaderStyle = {
  headline: styled.p`
    width: 50%;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    display: flex;
    align-items: center;
    letter-spacing: 5px;
    color: black;
    margin-left: 10%;
  `,
  topBarBorder: styled.section`
    width: 50%;
    border: 5px solid #333; 
    border-radius: 30px; 
    background-color: #333;
  `,
  topBarContent: styled.section`
    border: 1px solid red;
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background-color: #333; 
    border-bottom-left-radius: 30px;
  `,
}

// ============================== Btton Style ==============================
export let CommonBtnStyle = {
  btn: styled.button`
    display: flex;
    align-items: center;
    height: 50px;
    padding: 8px 12px;
    border: none;
    border-radius: 30px;
    background-color: #333;
      &:hover {
        background-color: rgb(255, 140, 0);
        &::after {
          content: "";
          width: 10px;
          background-color: rgb(255, 140, 0);
          height: 30px;
          margin-top: 50px;
          margin-left: -50%;
        }
      }
      &:focus {
        background-color: rgb(255, 140, 0);
        &::after {
          content: "";
          width: 10px;
          background-color: rgb(255, 140, 0);
          height: 30px;
          margin-top: 50px;
          margin-left: -50%;
        }
      }
  `,
  btnHeadline: styled.p`
    color: white;
    text-align: center;
    padding: 14px 16px;
    font-size: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    right: 12px;
    letter-spacing: 5px;
    margin: 0;
    border-right:1px solid #bbb;
  `,
}