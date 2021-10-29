// parse cookie named param
// if cookie is found, base64 decode it and parse it into an object
// if cookie is not found, redirect to login page test.html
function checkCookie(cookie_name, document) {
    console.log("checkCookie running");
    let name = cookie_name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            redirectToTheme("theme", document);
            return true;
        }
    }
    window.location.assign("login.html");
}

// parse cookie named cookie_name (param)
// if cookie is found, redirect to corresponding theme page
// if cookie is not found, redirect to login page test.html
function redirectToTheme(cookie_name, document) {
    console.log("redirectToTheme running");
    let name = cookie_name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        let cookie_object = c.substring(name.length, c.length);
        console.log(cookie_object);
        if (window.location.href.substring(-1) != cookie_object) {
            return window.location.assign("http://localhost/theme" + cookie_object);
        }
        else {
            return true;
        }
        }
    }
    window.location.assign("login.html");
}