function checkCookie(cookie_name, document) {
    let name = cookie_name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            var fullSessionCookie = c.substring(name.length, c.length);
            var cookieData = fullSessionCookie.split(".")[1]
            b64decoded = atob(cookieData);
            var json = JSON.parse(b64decoded);
            if (json['iss'] == "Logan Tech Catalog") {
                redirectToTheme("theme", document);
            }
            else {
                return window.location.assign("login.html");
            }

            return true;
        }
    }
    return window.location.assign("login.html");
}


function redirectToTheme(cookie_name, document) {
    let name = cookie_name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        let fullThemeCookie = c.substring(name.length, c.length);
        if (window.location.href.substring(38, 39) != fullThemeCookie && window.location.href.includes("login") == false) {
            return window.location.assign("https://tech-catalog.vercel.app/theme" + fullThemeCookie + window.location.href.substring(38));
        }
        else if (window.location.href.substring(38, 39) != fullThemeCookie && window.location.href.includes("login") == true) {
            return window.location.assign("https://tech-catalog.vercel.app/theme" + fullThemeCookie);
        }
        else {
            return true;
        }
        }
    }
    return window.location.assign("login.html");
}