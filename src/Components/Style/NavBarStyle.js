/* ================================================== Style Rouls for Auth ==================================================
Imports module */
import styled from 'styled-components';

export let NavBarStyle = {
  topBarContainer: styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 60%;
    background-color: #333; 
    border-bottom-left-radius: 30px;
  `,
}
// ============================== Btton Style ==============================
export let CommonBtnStyle = {
  btn: styled.button`
    height: 50px;
    padding: 8px 12px;
    border: none;
    border-radius: 30px;
    background-color: #333;
      &:hover {
        background-color: rgb(255, 140, 0);
        &::after {
          content: "v";
          width: 10px;
          background-color: rgb(255, 140, 0);
          color: rgb(255, 140, 0);
          height: 30px;
          margin-top: 50px;
          margin-left: -10%;
        }
      }
      &:focus {
        background-color: rgb(255, 140, 0);
        &::after {
          content: "v";
          width: 10px;
          background-color: rgb(255, 140, 0);
          color: rgb(255, 140, 0);
          height: 30px;
          margin-top: 50px;
          margin-left: -10%;
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
export const specificBtnStyle = {
  lastNavPageContainer: styled.section`
    margin-top: -57px;
    margin-left: 1280px;
    border-right: none;
  `,
  lastNavPage: { borderRight: 'none',}
}