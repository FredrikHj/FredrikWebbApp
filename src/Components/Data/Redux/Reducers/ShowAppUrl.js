import { getInitialAppUrl, getNewAppUrl } from "../ActionTypes";
import { changeAppUrl } from'../Actions';

const updateAppUrl = (state = getInitialAppUrl, action) => {
    switch(action.type) {
      case 'changeAppUrl':
        return window.location.pathname;
      default:
      return state;
    }
}

export default updateAppUrl;