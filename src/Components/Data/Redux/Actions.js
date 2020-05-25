import { showAppUrlStr } from "./ActionTypes";

let showAppUrlId = 0;

export const showAppUrl = content => ({
  type: showAppUrlStr,
  payload: {
    id: ++showAppUrlId,
    content
  }
});