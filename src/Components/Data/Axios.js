/* ================================================== Axios ==================================================
Imports module */
import axios from 'axios';
import { useSelector, useDispatch } from'react-redux';

// Import inportant components for the specific page
import { saveTextResp } from'./Redux/Actions/ActionUpdateTextResp';

// Initialize container
//const getUrlState = useSelector(state => state.appUrl);
const backendURL = 'http://localhost:3001';

export let axiosGet = (getType) => {
    const textObj = {};
    let routes = '';
    // Type of post method
    if (getType === 'GetText') routes = 'GetText';
    console.log("axiosGet -> `${backendURL}/${routes}`", `${backendURL}/${routes}`)
    
    axios.get(`${backendURL}/${routes}`).then(response => {  
        
        textObj['textObj'] = response.data;
    }).
    catch(error => {});
    return textObj;
    setTimeout(() => {
        return textObj;
    }, 1000);
}
const saveIntoStore = (data) => {

}
/* export let axiosPost = (postType, bodyData) => {      
    axios.post(
        `${backendURL}/SQLData/${ type }`
        , sendToSqlBackend ).then(response => {
          
    }).catch(error => {});
} */