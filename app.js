const botonElem = document.getElementById('boton-cambiar-cita');

const citasElem = document.getElementById('cita');
const autorElem = document.getElementById('autor');

function generarNumAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita() {
  let indiceAleatorio = generarNumAleatorio(0, citas.length);
  citasElem.innerText = `"${citas[indiceAleatorio].cita}"`;
  autorElem.innerText = citas[indiceAleatorio].autor;
}

// Mostrar una cita al cargar la página
cambiarCita();

// Cambiar la cita al hacer clic en el botón
botonElem.addEventListener('click', cambiarCita);