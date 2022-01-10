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
                return window.location.assign("https://catalog.theloganschool.org/login.html");
            }
            pageLoad(document);
            return true;
        }
    }
    return window.location.assign("https://catalog.theloganschool.org/login.html");
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
        if (window.location.href.substring(40, 41) != fullThemeCookie && window.location.href.includes("login") == false) {
            return window.location.assign("https://catalog.theloganschool.org/theme" + fullThemeCookie + window.location.href.substring(38));
        }
        else if (window.location.href.substring(40, 41) != fullThemeCookie && window.location.href.includes("login") == true) {
            return window.location.assign("https://catalog.theloganschool.org/theme" + fullThemeCookie);
        }
        else {
            pageLoad(document);
            return true;
        }
        }
    }
    return window.location.assign("https://catalog.theloganschool.org/login.html");
}

function pageNotFoundRedirect() {
    window.location.assign("https://catalog.theloganschool.org/");
}

async function pageLoad(document) {

const client_ip = await fetch(
    'https://api.ipify.org?format=json'
).then(res => res.json());

const event = await fetch(
    "https://tech-catalog-backend.herokuapp.com/record_event",
    {
    method: "POST",
    body: JSON.stringify({
        // get value of cookie "theme"
        "theme": document.cookie.split("theme=")[1].split(";")[0],
        "time": Date.now().toString(),
        "event": "page_view",
        "session_token": document.cookie.split("session_token=")[1].split(";")[0],
        "client_ip": client_ip.ip,
        "url": window.location.href
    }),
    mode: "no-cors",
    }
).then(res => res.json());
}