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
    margin-left: calc(50% - 345px);
    width: 1000px;
    height: 75px;  
    background-color: #333;
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
    width: 500px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    display: flex;
    align-items: center;
    letter-spacing: 5px;
  `,
  Content: styled.section`
    border: 1px solid red;
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `,
}