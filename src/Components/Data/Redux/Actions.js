import { showAppUrlStr } from "./ActionTypes";
import { connect } from "react-redux";

import { appUrl } from'../AppUrl';

export const RunAppUrl = () => ({
  type: showAppUrlStr, url: appUrl()
}); 
console.log("RunAppUrl", RunAppUrl())
