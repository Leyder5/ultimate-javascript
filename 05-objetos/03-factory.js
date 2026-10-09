// Lección 51: Factory functions
// Nos permiten crear objetos de una manera sencilla y no repetitiva

// Sin factory function hay que copiar y pegar el objeto por cada usuario:
// let user = {
//     id: 1,
//     email: 'nico@holamundo.io',
//     name: 'Nicolas',
//     activo: true,
//     recuperarClave: function () {
//         console.log('recuperando clave...');
//     },
// };
//
// let user1 = {
//     id: 2,
//     email: 'chanchito@holamundo.io',
//     name: 'Chanchito',
//     activo: false,
//     recuperarClave: function () {
//         console.log('recuperando clave...');
//     },
// };

// Convención: camelCase y por lo general comienzan con crear o create
function crearUsuario(name, email) {
    // se retorna el objeto inmediatamente, no hace falta una variable
    return {
        // si la variable se llama igual que la propiedad
        // se puede escribir solo email en vez de email: email
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Nicolas', 'nico@holamundo.io');
let user2 = crearUsuario('Felipe', 'felipe@holamundo.io');

// misma estructura de propiedades, pero con valores distintos
console.log(user1, user2);
