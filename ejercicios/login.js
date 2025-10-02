import { USERS } from "./users.js";

const form = document.getElementById("form");

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    let usuario = document.getElementById("user").value;
    console.log(usuario)
    let contra = document.getElementById("password").value;
    console.log(contra)
    const valido = USERS.find(u=> u.user === usuario && u.password === contra)

    if (valido) {
        const userLog = { isLoggin:true, user:valido.user }; // CREO ESTE OBJETO USUARIO PARA GUARDAR EN LS
        localStorage.setItem("session", JSON.stringify(userLog));// ACA GUARDO LOS DATOS DE SESSION
        window.location.replace("main.html");
    } else {
        alert("Usuario o contraseña incorrecta.")
    }
});