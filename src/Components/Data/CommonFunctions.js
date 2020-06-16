import { updateGotoPage } from'./Storage';
export const runGoToPage = (e) => {
    const targetBtn = e.target;
    const targetPage = targetBtn.id;
    console.log("runGoToPage -> targetPage", targetPage)
    updateGotoPage(targetPage);
  }