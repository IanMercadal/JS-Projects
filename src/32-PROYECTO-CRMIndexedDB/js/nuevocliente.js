(function() {
    let DB;
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();

        formulario.addEventListener('submit', validarCliente);
    });

    function conectarDB() {
        const abrirConexion = window.indexedDB.open('crm',1);

        abrirConexion.onerror = function() {
            console.error('Hubo un error');
        ;}

        abrirConexion.onsuccess = function() {
            DB = abrirConexion.result;
        }
    }
    function validarCliente(e) {
        e.preventDefault();

        // Leer todos los imputs
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        if(nombre == '' || email == '' || telefono == '' || empresa == '') {
            imprimirAlerta("Todos los campos son obligatorios", "error");
            return;
        }
    }

    function imprimirAlerta(mensaje, tipo) {
        // Crear la alerta
        const alerta = document.querySelector('.alerta');

        if(!alerta) {
            // Crear la alerta
            const divMensaje = document.createElement("div");
            divMensaje.classList.add('px-4','py-3','rounded','max-w-g','mx-auto','mt-6','text-center','border');

            if(tipo === 'error') {
                divMensaje.classList.add('bg-red-100','border-red-400','text-red-700');
            } else {
                divMensaje.classList.add('bg-green-100','border-green-400','text-green-700')
            }

            divMensaje.textContent = mensaje;

            formulario.appendChild(divMensaje);

            setTimeout( () => {
                divMensaje.remove();
            },3000);
        }
    }
})();