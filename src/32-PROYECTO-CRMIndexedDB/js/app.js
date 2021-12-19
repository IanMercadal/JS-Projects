(function() {
    let DB;

    document.addEventListener('DOMContentLoaded', () => {
        crearDB();
    });

    // Crea la bbdd de IndexDB
    function crearDB() {
        const crearDB = window.indexedDB.open('crm', 1);

        crearDB.onerror = function () {
            console.log('Error');
        };

        crearDB.onsuccess = function () {
            DB = crearDB.result;
        }

        crearDB.onupgradeneeded = function (e) {
            const db = e.target.result;

            const objectStore = db.createObjectStore('crm', {keyPath: 'id', autoIncrement: true});

            objectStore.createIndex('nombre','nombre', {unique: false});
            objectStore.createIndex('email','email', {unique: false});
            objectStore.createIndex('telefono','telefono', {unique: false});
            objectStore.createIndex('empresa','empresa', {unique: false});
            objectStore.createIndex('id','id', {unique: true});

            console.log("DB creada y lista");
        }
    }
})();