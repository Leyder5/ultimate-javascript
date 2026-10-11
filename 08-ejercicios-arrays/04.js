// Ejercicio 04: cuantosPremium y cuantosMayores
// dos funciones que cuentan usuarios y devuelven un número

const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 15, nombre: 'Chanchito', plan: 'premium' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
];

// primera versión con if
// function cuantosPremium(users) {
//     return users.reduce((acc, el) => {
//         if (el.plan !== 'free') {
//             return acc + 1;
//         }
//         // no hace falta else: el return detiene la ejecución
//         return acc;
//     }, 0);
// }

// versión mejorada con operador ternario y return implícito
// (cuenta los usuarios que pagan: los que no son free)
function cuantosPremium(users) {
    return users.reduce((acc, el) => el.plan !== 'free' ? acc + 1 : acc, 0);
}

function cuantosMayores(users) {
    return users.reduce((acc, el) => el.edad > 17 ? acc + 1 : acc, 0);
}

console.log(cuantosPremium(usuarios));   // 3
console.log(cuantosMayores(usuarios));   // 2
