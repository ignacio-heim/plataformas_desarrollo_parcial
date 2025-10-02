
/*MODULO 4 y 5*/
// LOGICA DE COMO GUARDAR LAS TAREAS
const input = document.getElementById("nuevaTarea");
const boton = document.getElementById("agregar");
const lista = document.getElementById("listaTareas");
const div = document.getElementById("welcome");

const userLog = JSON.parse(localStorage.getItem("session")) || {};

if (div && userLog.user) {
    const title = document.createElement("h1");
    title.textContent = "Bienvenido " + userLog.user;
    div.appendChild(title);
}

const TASKS = JSON.parse(localStorage.getItem("tasks")) || [];
let idSig =
    Number(localStorage.getItem("nextId")) ||
    (TASKS.length ? Math.max(...TASKS.map(t => t.id || 0)) + 1 : 1);

const taskPara = document.createElement("p");
div.appendChild(taskPara);

function actualizarResumen() {
    const tareas = JSON.parse(localStorage.getItem("tasks")) || [];
    taskPara.textContent =
        tareas.length === 0
            ? "No tienes tareas pendientes."
            : `Tienes ${tareas.length} tareas pendientes.`;
}

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

renderLista();
actualizarResumen();

boton.addEventListener("click", () => {
    const texto = input.value.trim();
    if (texto === "") {
        alert("Debes escribir una tarea");
        return;
    }
    const tarea = { id: idSig, titulo: texto, completada: false };
    TASKS.push(tarea);
    localStorage.setItem("tasks", JSON.stringify(TASKS));

    idSig++;
    localStorage.setItem("nextId", String(idSig));

    input.value = "";

    renderLista();
    actualizarResumen();
});

//5, Diferencia entre const, let y vat
    // const: se usa para variables que no va a cambiar su referencia.
    // Ejemplos: const USERS = [user1, user2, user3];

    // let: cuando se define una variable let, se puede reasignar valores
    // ejemplo: let isLoggedIn = false;
        // function login(user, pass) {
        //   if (user === "ana" && pass === "1234") {
        //     isLoggedIn = true;
        //   }
        // }

    // var: no se utiliza hoy en dia

//6. Condiciones y bucles
let maxTask = function(n) {
    if (n<0) {
        alert("Error en lista de tareas");
    } else {
        TASK.forEach(it=>{
            let id = it.id;
            if (id % 2 === 0) {
                alert(it.titulo);
            }
        })
    }
}

/*MODULO 2*/

// 1. Funcion tradicional de SALUDO
function saludoTradicional() {
    if(tareas.length===0) {
        alert(`Hola ${userLog.user}! No tienes tarea pendientes.`);
    } else {
        alert(`Hola ${userLog.user}! Tienes ${tareas.length} tareas pendientes.`)
    }
}
//saludoTradicional();

/*MODULO 2*/
// 1. Funcion Flecha
let saludoFlecha = () => {
    if(tareas.length===0) {
        alert(`Hola ${userLog.user}! No tienes tarea pendientes.`);
    } else {
        alert(`Hola ${userLog.user}! Tienes ${tareas.length} tareas pendientes.`)
    }
}
//saludoFlecha();

//2. Funcion Anonima
let saludoAninima = function (p,q) {
    if(q===0) {
        alert(`Hola ${p}! No tienes tarea pendientes.`);
    } else {
        alert(`Hola ${p}! Tienes ${q} tareas pendientes.`)
    }
}
//saludoAninima(userLog.user,tareas.length);

//3. Recursion Tareas
function tareasRecursivas(n,i=0) {
    if (i>n.length) { //Caso base
        return;
    } else { // Caso inductivo
        console.log(n[i])
    }
    tareasRecursivas(n,i+1);
}
//tareasRecursivas(TASK);
//4. La recursión es util en este caso ya que no necesitamos saber la cantidad de subniveles que tienen. Puede ser 0, 2 o 100.
// Además, el codigo es corto y facil de leer.

/*MODULO 3*/

//1. Mostrar tareas por consola
let tareasPorConsola = (list) => {
    list.forEach(it=>{
        console.log(it.titulo);
    })
}
//tareasPorConsola(TASK);

//2. Mostrart taraes no completadas
let tareasNoCompletadas = function(list) {
    return list.filter(it => it.completada===false);
}
//tareasNoCompletadas(TASK);

//3. Mostrar titulos
function titulosTareas(list) {
    return list.map(t=> t.titulo);
}
//titulosTareas(TASK);

//4. Reduce
const catnidadTareasConpletadas = (list) => {
    list.reduce((contador, tarea) => {
        if(tarea.completada) {
            return contador +1;
        } else {
            return contador;
        }

    },0);
}
//catnidadTareasConpletadas(TASK);

/*MODULO 6*/
// 9. THEN, CATCH, FINALLY
let encontrarTarea = (tarea) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if (tareas.find(u=> u.titulo === tarea)) {
                resolve("Tarea encontrada");
            } else {
                reject("La tarea no existe");
            }
        },2000)
    })
}
/*
encontrarTarea("Lavar ropa")
    .then(msg=>console.log(msg))
    .catch(err=>console.log(err))
    .finally(()=>"La busqueda finalizo.")
*/

// 10. ASYNC Y AWAIT
async function buscarTarea() {
    try {
        const msg = await encontrarTarea("Lavar ropa");
        console.log(msg);
    } catch (err) {
        console.error(err);
    } finally {
        console.log("Búsqueda terminada");
    }
}
//buscarTarea();