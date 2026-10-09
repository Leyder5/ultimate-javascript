// Lección 49: Introducción a objetos

// Variables sueltas que están relacionadas entre sí (datos de un usuario)
// let email = 'nico@holamundo.io';
// let name = 'Nicolas';
// let direccion = {
//     calle: 'Queen st',
//     numero: 15,
// };

// Con un objeto agrupamos todos esos datos en una sola variable
let user = {
    email: 'nico@holamundo.io',
    name: 'Nicolas',
    // se pueden colocar objetos dentro de objetos
    direccion: {
        calle: 'Queen st',
        numero: 15,
    },
    activo: true,
    // función anónima: no lleva nombre porque la propiedad ya lo tiene
    recuperarClave: function () {
        console.log('Recuperando clave...');
    },
};

// Programación orientada a objetos (POO / OOP):
// encapsular datos y comportamientos relacionados dentro de un objeto
console.log(user);
user.recuperarClave();
