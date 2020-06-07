import { initialTextResp, saveTextResp } from "../ActionTypes";

const updateTextResp = (state = initialTextResp, action) => {
  if (action.payLoad !== undefined ) { 
    switch(action.type) {
      case saveTextResp:
        console.log("updateTextResp -> action.payLoad", action.payLoad);
        return action.payLoad;
      default:
      return state;
    }
  }
  else return state;
}

export default updateTextResp;