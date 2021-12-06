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
      })
    }
  ).then(res => res.json());
console.log(event);
    console.log(event);
}