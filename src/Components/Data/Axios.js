/* ================================================== Axios ==================================================
Imports module */
import axios from 'axios';

// Import inportant components for the specific page
import { updateIncommingTextObj } from'./Storage';

// Initialize container

//const getUrlState = useSelector(state => state.appUrl);
const backendURL = 'http://localhost:3001/GetText';

export let axiosGet = (pageText) => {
    let params = '';
    // Type of post method
    if (pageText === 'textMain') params = pageText;
    
    axios.get(`${backendURL}:${params}`).then(response => {
        console.log("axiosGet -> response", response.data)
        // Only send the current object into correct components
        updateIncommingTextObj(response.data[pageText]);
    }).
    catch(error => {});
}

/* export let axiosPost = (postType, bodyData) => {      
    axios.post(
        `${backendURL}/SQLData/${ type }`
        , sendToSqlBackend ).then(response => {
          
    }).catch(error => {});
} */