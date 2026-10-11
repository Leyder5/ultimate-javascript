// Lección 117: Introducción (historia de la programación orientada a objetos)
// La POO es un ESTILO de programación (cómo se escribe el código), no una funcionalidad
//
// 1. Programación imperativa: el código se ejecuta de arriba hacia abajo,
//    casi sin forma de reutilizar código (como mucho con goto)
// 2. Programación procedural (orientada a procedimientos): divide la aplicación
//    en funciones pequeñas, más fáciles de entender
// 3. Programación estructurada: un tipo de procedural que separa
//    las funciones de los datos
// 4. Programación orientada a objetos: agrupa los datos y las funcionalidades
//    que tiene sentido agrupar

// Programación estructurada: datos y funciones separados
let nombre = 'Chanchito';
let apellido = 'Feliz';

function getNombreCompleto(nombre, apellido) {
    return `${nombre} ${apellido}`;
}

console.log(getNombreCompleto(nombre, apellido));

// Programación orientada a objetos: todo dentro del objeto
const user = {
    nombre: 'Chanchito',
    apellido: 'Feliz',
    // no necesita parámetros: con this usa los datos del mismo objeto
    getNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    },
};

console.log(user.getNombreCompleto());

// Otro ejemplo: una sala de clases con propiedades (alumnos, nombre, sede)
// y métodos (agregarAlumno, quitarAlumno, notificarApoderados...)
