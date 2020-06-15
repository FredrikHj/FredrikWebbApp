import { updateGotoPage } from'./Storage';

export const runGoToPage = (e) => {
    const targetPage = e.target.id;
    //updateCurrentUrl(targetPage);
    
    updateGotoPage(targetPage);

    //updateUrlChanged(true);

    //updateRedirectionPath(targetPage);
  }