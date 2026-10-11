// Lección 107: Getters y setters

const usuario = {
    nombre: 'Chanchito',
    apellido: 'Feliz',
    // como método (forma corta, sin function ni dos puntos):
    // nombreCompleto() {
    //     return `${this.nombre} ${this.apellido}`;
    // },

    // getter: se lee como si fuera una propiedad
    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    },
    // setter: mismo nombre que el getter, recibe SIEMPRE un parámetro (el valor)
    set nombreCompleto(valor) {
        const [nombre, apellido] = valor.split(' ');
        this.nombre = nombre;
        this.apellido = apellido;
    },
};

// sin getter habría que hacer: usuario.nombre + ' ' + usuario.apellido
// o usuario.nombreCompleto() si fuera un método
console.log(usuario.nombreCompleto);   // Chanchito Feliz

usuario.nombreCompleto = 'Hola Mundo';
console.log(usuario.nombreCompleto);   // Hola Mundo

// posibles errores:
// usuario.nombreCompleto = 'Hola';   // Hola undefined
// usuario.nombreCompleto = 12;       // TypeError: valor.split is not a function
// en el siguiente video se ve cómo manejarlos
