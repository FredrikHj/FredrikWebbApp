export const saveTextResp = (data) => {
    console.log("saveTextResp -> data", data)
    return {type: 'upTextResp', payLoad: data};
};