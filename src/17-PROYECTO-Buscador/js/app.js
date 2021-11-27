// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); // mostrar coches al cargar

    // Llenar las opciones de año
    llenarSelect();
})

// Funciones
function mostrarAutos(){
    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision}
            - Precio ${precio} - Color ${color}
        `;
        // Insertar en el HTML
        resultado.appendChild(autoHTML);
    })
}

// Genera los años del select
function llenarSelect(){
    // Max sería 2021 y min 2011
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agregar las opciones de año al select
    }
}