# Gestor de Tareas

Aplicación simple de **gestión de tareas** con autenticación simulada. Todo el estado se guarda en **LocalStorage** y el objetivo es practicar **DOM**, funciones (tradicionales, flecha, anónimas), arrays (map/filter/reduce), recursión y promesas con `async/await`.

---

## Funcionalidades

- **Login** con usuarios hardcodeados.  
- **Sesión persistida** en LocalStorage.  
- **Agregar tareas** con IDs autoincrementales.  
- **Resumen** dinámico de tareas pendientes.  
- **Ejemplos educativos**: funciones, recursión, `map`, `filter`, `reduce`, promesas y `async/await`.

---

## Cómo usarlo

1. Cloná el repo y abrí `index.html` (ideal con Live Server).  
2. Iniciá sesión con alguno de estos usuarios:  
   - `ana / clave123`  
   - `pepe / qwerty`  
   - `luis / 1234`  
3. Al loguearte, se guarda la sesión en LocalStorage y redirige a `main.html`.  
4. Desde `main.html` podés agregar tareas, listarlas y ver un resumen.

---

## Autenticación

- El formulario de login valida contra un array de `USERS`.  
- Si los datos son correctos, guarda en `localStorage`:
  ```json
  {
    "isLoggin": true,
    "user": "nombre_usuario"
  }
