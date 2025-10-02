function renderDatos() {
    const session = JSON.parse(localStorage.getItem("session"));
    const ok = session && session.isLoggin;
    if(ok) {
        window.location.replace("main.html");
    }
}
renderDatos();