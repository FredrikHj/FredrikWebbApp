// Get correct URLS
export let appUrl = () => {
    let appUrlHostname = window.location;
    console.log("appUrl -> appUrlHostname", appUrlHostname)
    return appUrlHostname;
}