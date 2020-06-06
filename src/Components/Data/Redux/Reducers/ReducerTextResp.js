import { initialTextResp, saveTextResp } from "../ActionTypes";

const updateTextResp = (state = initialTextResp, action) => {
  if (action.payLoad !== undefined ) { 
    switch(action.type) {
      case saveTextResp:
        return action.payLoad;
      default:
      return state;
    }
  }
  else return state;
}

export default updateTextResp;