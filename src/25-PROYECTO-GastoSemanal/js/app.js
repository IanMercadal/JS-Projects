// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gasto ul');

// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
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
    imprimirAlerta(mensaje, tipo) {
        // Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else{
            divMensaje.classList.add('alert-succes');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el HTML
        document.querySelector('.primario').insertBefore( divMensaje, formulario);
        // Quitarlo
        setTimeout( () => {
            divMensaje.remove();
        }, 3000);
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

function agregarGasto(e) {
    e.preventDefault();

    // Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = document.querySelector('#cantidad').value;

    // Validar
    if(nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        
        return;
    } else if( cantidad <= 0 || isNaN(cantidad) ) {
        ui.imprimirAlerta('Cantidad no válida', 'error');

        return;
    }
    console.log("Agregando gasto");
}