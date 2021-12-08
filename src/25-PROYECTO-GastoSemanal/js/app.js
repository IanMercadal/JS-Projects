// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gasto ul');

// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}
// Clases

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
}

class UI {
    insertarPresupuesto(cantidad) {
        // Extraer valores
        const {presupuesto, restante} = cantidad;

        // Agregar HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }
}

// Instanciar
const ui = new UI();
let presupuesto;

// Funciones
function preguntarPresupuesto() {
    const preguntarUsuario = prompt('¿Cuál es el presupuesto?');

    if(preguntarUsuario === '' || preguntarUsuario === null || isNaN(preguntarUsuario) || preguntarUsuario <= 0) {
        window.location.reload();
    }
    presupuesto = new Presupuesto(preguntarUsuario);

    ui.insertarPresupuesto(presupuesto);
}