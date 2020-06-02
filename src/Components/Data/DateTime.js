// Date and time
export const startDateTime = () =>{
    let today = new Date();
        
    //  Visa datum
    let dd = today.getDate();
        
    // Visa månadens namn   
    let month = new Array();                   

    month[0] = "Januari";
    month[1] = "Februari";
    month[2] = "Mars";
    month[3] = "April";
    month[4] = "Maj";
    month[5] = "Juni";
    month[6] = "Juli";
    month[7] = "Augusti";
    month[8] = "September";
    month[9] = "Oktober";
    month[10] = "November";
    month[11] = "December";

    let monthnr = new Date();
    let monthname = month[monthnr.getMonth()];
                
    let yyyy = today.getFullYear();
        
    // Visa tid 
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);

    // Infoga allt och presentera i namngiven div
    let dateTimeStr = `${dd} ${monthname} ${yyyy} | ${h}:${m}`;

    setTimeout(startDateTime, 500);

    function checkTime(i)
    {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }
    return dateTimeStr;
}