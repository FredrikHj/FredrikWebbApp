import { showAppUrlStr } from "../ActionTypes";

const initialState = ' ';

const updateShowAppUrl  = (state, action) => {
  console.log("updateShowAppUrl -> state", state)
  if (state !== null) return initialState;
  return state;
}
export default updateShowAppUrl;