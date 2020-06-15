/* ================================================== Style Rouls for Auth ==================================================
Imports module */
import styled from 'styled-components';
import { color } from'./CommonCSSRoules';

import { from } from 'rxjs';
export let NavBarStyle = {
  topBarContainer: styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 60%;
    background-color: ${color.darkBlackDarkGreen};
    border-bottom-left-radius: 30px;
  `,
}
// ============================== Btton Style ==============================
export let CommonBtnStyle = {
  btn: styled.button`
    height: 60px;
    padding: 8px 12px;
    border: none;
    border-radius: 30px;
  `,
  btnMarker: styled.div`
    width: 10px;
    background-color: ${ color.darkOrange };
    color: ${ color.darkOrange };
    height: 10px;
    margin-top: 6px;
    margin-left: 49%;
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
  logoBtn: styled.button`
    background: none;
    border: none;
  `,
    logo: styled.div`
    background: none;
    border: none;
  `,
  btnInactive: {
    backgroundColor: color.darkBlackDarkGreen,
  },

  btnActive: {
    backgroundColor: color.darkOrange,
  },
  lastNavPageContainer: styled.section`
    margin-left: 340px;
    border-right: none;
  `,
  lastNavPage: {
    borderRight: 'none',
  }, 
  sideBarBtn: {
    margin: '40px 20px 20px 20px',
    backgroundColor: color.darkBlackDarkGreen,
  },
}