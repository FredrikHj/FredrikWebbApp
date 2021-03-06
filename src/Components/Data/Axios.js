/* ================================================== Axios ==================================================
Imports module */
import axios from 'axios';

// Import inportant components for the specific page
import { updateIncommingTextObj } from'./Storage';

// Initialize container

//const getUrlState = useSelector(state => state.appUrl);
const backendURL = 'http://fredrikipnr.mina-projekt.se:3001/GetText';
//const backendURL = 'http://localhost:3001/GetText';

export let axiosGet = () => {
    axios.get(backendURL).then(response => {
        console.log("axiosGet -> response", response.data)
        const incommingObj = response.data;
        const lastStoredObj = incommingObj;


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