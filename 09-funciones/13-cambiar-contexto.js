// Lección 111: Cambiando el contexto de this

function saludar(...rest) {
    console.log(this, rest);
}

// saludar();   // this es window (en el navegador)

// call: primer argumento es el contexto de this, luego los argumentos uno a uno
saludar.call({ propiedad: 'Hola mundo' }, 1, 5);

// apply: igual que call, pero los argumentos van en un array
saludar.apply({ propiedad: 'Hola mundo' }, [1, 5]);

// bind: solo cambia el contexto de this y devuelve una NUEVA función
const nuevoSaludar = saludar.bind({ propiedad: 'Hola mundo' });
nuevoSaludar(1, 5);

// forma corta: ejecutarla inmediatamente
saludar.bind({ propiedad: 'Hola mundo' })(3, 5);

// también se puede hacer bind en la misma declaración,
// envolviendo la función entre paréntesis
(function (...rest) {
    console.log(this, rest);
}).bind({ propiedad: 'Hola mundo' })(1, 2);

// Formas antiguas de resolver el problema del video anterior
// (por si te toca revisar código más viejo)
const usuario = {
    nombre: 'Nicolas',
    ciudadanias: ['Chile', 'Colombia', 'New Zealand'],
    mostrarCiudadanias() {
        // 1. con bind(this)
        this.ciudadanias.forEach(function (ciudadania) {
            console.log(this.nombre, ciudadania);
        }.bind(this));

        // 2. guardando this en una variable (self, that...)
        const self = this;
        this.ciudadanias.forEach(function (ciudadania) {
            console.log(self.nombre, ciudadania);
        });

        // 3. forEach recibe como último argumento el contexto de this
        // (no todos los métodos de array lo reciben)
        this.ciudadanias.forEach(function (ciudadania) {
            console.log(this.nombre, ciudadania);
        }, this);
    },
};

usuario.mostrarCiudadanias();
