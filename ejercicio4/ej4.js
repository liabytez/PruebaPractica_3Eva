let contador = 0

function añadirTarea() {
    const inputTarea = document.getElementById("inputTarea")
    const salidaTarea = document.getElementById("tareas")

    if (inputTarea.value != "") {
        salidaTarea.innerHTML += `
        <div class="tareas" id="tareaAñadida">
        ${inputTarea.value}
        <button onclick="eliminarTarea()">X</button>
        </div>
        `
        inputTarea.value = ""
    }

    contador = contador + 1
    renderContador()
}

function eliminarTarea() {
    const tareaAñadida = document.getElementById("tareaAñadida")
    //tareaAñadida.style.visibility = disabled

    contador = contador - 1
    renderContador()
}

function renderContador() {
    const contadorTexto = document.getElementById("contador")
    contadorTexto.innerHTML = contador
}