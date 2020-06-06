import { getInitialAppUrl, changeAppUrl } from "../ActionTypes";

const updateAppUrl = (state = getInitialAppUrl, action) => {
    switch(action.type) {
      case changeAppUrl:
        return window.location.pathname;
      default:
      return state;
    }
}

export default updateAppUrl;