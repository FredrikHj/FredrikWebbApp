import { initialTextResp, saveTextResp } from "../ActionTypes";

const updateTextResp = (state = initialTextResp, action) => {
  console.log("action -> action", action)
  switch(action.type) {
    case 'upTextResp':
    return action.payload;
      default:
      return state;
    }
}

export default updateTextResp;