README — Gestor de Tareas (Vanilla JS + LocalStorage)
Pequeña app de to-dos con login simulado en memoria. Todo el estado se guarda en LocalStorage (sin backend). El objetivo es practicar DOM, funciones (tradicionales, flecha, anónimas), arrays (map/filter/reduce), recursión y promesas/async-await.
✨ Funcionalidades
Login simulado con usuarios hardcodeados.
Sesión persistida en localStorage (session).
CRUD básico de tareas (crear y listar; base para completar/eliminar).
Contador/Resumen de tareas pendientes.
IDs autoincrementales persistidos (nextId).
Demostraciones: funciones, recursión, Promise/async-await, then/catch/finally.
🗂️ Estructura esperada (sugerida)
/public
  index.html        # Login
  main.html         # Página de tareas (dashboard)
  /js
    app.js          # Este código
    users.js        # (opcional) export de USERS si se separa
  /css
    styles.css
Nota: El código actual mezcla USERS en el mismo archivo y también lo importa desde ./users.js. Elegí una de las dos estrategias (ver “Mejoras recomendadas”).
🚀 Puesta en marcha
Colocá los archivos en un servidor estático (o abrí index.html con Live Server).
Ingresá con alguno de los usuarios hardcodeados:
ana / clave123
pepe / qwerty
luis / 1234
Tras login exitoso, redirige a main.html.
🔐 Flujo de autenticación
Formulario con id="form".
Al submit:
Se evita el refresh (event.preventDefault()).
Se valida contra USERS.
Si OK, guarda:
session = { "isLoggin": true, "user": "<usuario>" }
en localStorage y redirige a main.html.
Si no, alert("Usuario o contraseña incorrecta.").
En carga, renderDatos() revisa si hay sesión válida y redirige a main.html.
🗄️ Claves en LocalStorage
session: objeto con estado de sesión.
tasks: array de tareas:
{ "id": number, "titulo": string, "completada": boolean }
nextId: número para autoincrementar IDs.
Si nextId no existe, se calcula como max(id) + 1 o 1 si no hay tareas.
🧩 Componentes principales
1) Bienvenida de usuario
const userLog = JSON.parse(localStorage.getItem("session")) || {};
if (div && userLog.user) {
  const title = document.createElement("h1");
  title.textContent = "Bienvenido " + userLog.user;
  div.appendChild(title);
}
Requiere un contenedor con id="welcome" en main.html.
2) Estado y referencias DOM
const input  = document.getElementById("nuevaTarea");
const boton  = document.getElementById("agregar");
const lista  = document.getElementById("listaTareas");
const div    = document.getElementById("welcome");

const TASKS = JSON.parse(localStorage.getItem("tasks")) || [];
let idSig = Number(localStorage.getItem("nextId"))
         || (TASKS.length ? Math.max(...TASKS.map(t => t.id || 0)) + 1 : 1);
3) Resumen de tareas
function actualizarResumen() {
  const tareas = JSON.parse(localStorage.getItem("tasks")) || [];
  taskPara.textContent = tareas.length === 0
    ? "No tienes tareas pendientes."
    : `Tienes ${tareas.length} tareas pendientes.`;
}
4) Render de la lista
function renderLista() {
  lista.innerHTML = "";
  const tareas = JSON.parse(localStorage.getItem("tasks")) || [];
  tareas.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t.titulo;
    li.style.color = "blue";
    lista.appendChild(li);
  });
}
5) Alta de tareas
boton.addEventListener("click", () => {
  const texto = input.value.trim();
  if (texto === "") { alert("Debes escribir una tarea"); return; }

  const tarea = { id: idSig, titulo: texto, completada: false };
  TASKS.push(tarea);
  localStorage.setItem("tasks", JSON.stringify(TASKS));

  idSig++;
  localStorage.setItem("nextId", String(idSig));

  input.value = "";
  renderLista();
  actualizarResumen();
});
🧪 Módulos de práctica incluidos
Módulo 1 — Usuarios hardcodeados
Tres usuarios y un array USERS. Ojo: también hay un export { USERS } y import { USERS } from "./users.js"; (ver “Mejoras”).
Módulo 2 — Funciones y recursión
Tradicional / Flecha / Anónima: muestran saludos con cantidad de tareas.
Recursión (tareasRecursivas): imprime tareas sin conocer profundidad.
Módulo 3 — Arrays
forEach, filter, map, reduce aplicados a la lista de tareas.
Módulo 4/5 — DOM + LocalStorage
Render de bienvenida, resumen, listado y alta de tareas.
Comentarios sobre const, let, var.
Módulo 6 — Promesas y async/await
encontrarTarea simula búsqueda asíncrona con setTimeout.
buscarTarea usa await + try/catch/finally.
