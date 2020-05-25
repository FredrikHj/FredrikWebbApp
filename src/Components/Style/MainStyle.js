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
    background-color: white;
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
  footer: styled.section`
    border: 1px solid red;
    width: 1380px;
    height: 100px;
    position: fixed;
    bottom: 0;
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
  topBarContent: styled.section`
    border: 1px solid red;
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  `,
}

// ============================== Btton Style ==============================
export let CommonBtnStyle = {
  btn: styled.button`
    display: flex;
    align-items: center;
    height: 50px;
    padding: 8px 12px;
    box-shadow: 0px 1px 2px rgba(98, 98, 98, 0.18), 0px 0px 2px rgba(98, 98, 98, 0.18);
    border-radius: 30px;
    background-color: #4CAF50;
      &:hover {
        background-color: black;
    }
  `,
  btnHeadline: styled.p`
    color: white;
    text-align: center;
    padding: 14px 16px;
    font-size: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    right: 12px;
    letter-spacing: 5px;
    margin: 0;
  `,
}