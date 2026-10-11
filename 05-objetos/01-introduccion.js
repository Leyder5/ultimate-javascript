
// Con un objeto agrupamos todos esos datos en una sola variable
let user = {
    email: 'nico@holamundo.io',
    name: 'Nicolás',
    direccion: {
        calle: 'Queen Street',
        numero: 15,
    },
    activo: true,
    recuperarClave: function () {
        console.log('recuperando clave');
    },
};

// Programación orientada a objetos (POO / OOP):
// encapsular datos y comportamientos relacionados dentro de un objeto
console.log(user);
user.recuperarClave();
