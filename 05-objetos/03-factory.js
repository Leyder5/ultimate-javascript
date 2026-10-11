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


function crearUsuario(name, email) {

    return {
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


console.log(user1, user2);
