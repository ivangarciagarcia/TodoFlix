const form = document.getElementById("frmGestionTareas");
const txtNuevaTarea = document.getElementById("txtNuevaTarea");
const btnAgregarTarea = document.getElementById("btnAgregarTarea");
const contenedorTareas = document.getElementById("contenedorTareas");

let tareas = localStorage.getItem("tareas") ? JSON.parse(localStorage.getItem("tareas")) : [];

cargarTareas();

btnAgregarTarea.addEventListener("click", function(event) {
  event.preventDefault();
  agregarTarea();
});

function agregarTarea() {
  let nuevaTarea = txtNuevaTarea.value;
  tareas.push({
    tarea: nuevaTarea,
    completada: false
  });
  localStorage.setItem("tareas", JSON.stringify(tareas));
  cargarTareas();
  txtNuevaTarea.value = "";
}

function cargarTareas() {
  contenedorTareas.innerHTML = "";
  for (let i = 0; i < tareas.length; i++) {
    let tarea = tareas[i];
    contenedorTareas.innerHTML += `
      <li>
        <input type="checkbox" ${tarea.completada ? "checked" : ""} onchange="marcarCompletada(${i})">
        ${tarea.tarea}
        <span onclick="eliminarTarea(${i})" style="cursor: pointer;">&times;</span>
      </li>
    `;
  }
}

function eliminarTarea(index) {
  tareas.splice(index, 1);
  localStorage.setItem("tareas", JSON.stringify(tareas));
  cargarTareas();
}

function marcarCompletada(index) {
  tareas[index].completada = !tareas[index].completada;
  localStorage.setItem("tareas", JSON.stringify(tareas));
  cargarTareas();
}