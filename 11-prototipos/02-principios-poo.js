// Encapsulación                                       -> agrupar propiedades y métodos que tiene sentido agrupar
// const user = {
//     nombre: 'Hola',
//     apellido: 'Mundo',
//     getNombreCompleto() {                           // no necesita parámetros: usa this
//         return [this.nombre, this.apellido].join(' ');
//     }
// };

// console.log(user.getNombreCompleto());

// Abstracción                                         -> sabemos QUÉ hace, el CÓMO no nos interesa
// const user = new User();
// user.password = 'Chanchito feliz';
// user.save();

// Herencia                                            -> los tres necesitan id, nombre y save():
// User                                                   en vez de repetirlo 3 veces, lo heredan
// Restaurante                                            de una función constructora padre
// Motociclista

function validaEntidad(entidad) {                      // Polimorfismo: en vez de un switch por cada entidad,
    // ...                                             // todas tienen el mismo método save con su propia
                                                       // implementación (API, base de datos, autenticación)
    entidad.save();
}
