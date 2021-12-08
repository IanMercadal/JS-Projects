// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gasto ul');

// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}
// Clases

// Funciones
function preguntarPresupuesto() {
    const preguntarUsuario = prompt('¿Cuál es el presupuesto?');

    if(preguntarUsuario === '' || preguntarUsuario === null || isNaN(preguntarUsuario) || preguntarUsuario <= 0) {
        window.location.reload();
    }
}