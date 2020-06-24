/* ================================================== Axios ==================================================
Imports module */
import axios from 'axios';

// Import inportant components for the specific page
import { updateIncommingTextObj } from'./Storage';

// Initialize container

//const getUrlState = useSelector(state => state.appUrl);
//const backendURL = 'http://localhost:3001/GetText';                   //Local https Server
const backendURL = 'http://fredrikipnr.mina-projekt.se:3001/GetText';   // Online https Sever

export let axiosGet = () => {
    axios.get(backendURL).then(response => {
        console.log("axiosGet -> response", response.data)
        // Only send the current object into correct components
        updateIncommingTextObj(response.data);
    }).
    catch(error => {});
}

/* export let axiosPost = (postType, bodyData) => {      
    axios.post(
        `${backendURL}/SQLData/${ type }`
        , sendToSqlBackend ).then(response => {
          
    }).catch(error => {});
} */