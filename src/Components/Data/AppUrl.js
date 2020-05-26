// Get correct URLS

export let appUrl = () => {
    let appUrlHostname = window.location.pathname;
    console.log("appUrl -> appUrlHostname", appUrlHostname)
    return appUrlHostname;
}