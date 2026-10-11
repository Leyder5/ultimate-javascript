// Ejercicio 05: obtenerMayor
// función que recibe un array de usuarios y devuelve el de mayor edad

const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 15, nombre: 'Chanchito', plan: 'premium' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
];

function obtenerMayor(arr) {
    // empezamos con el primer usuario; let porque se puede ir reemplazando
    let mayor = arr[0];
    for (let usuario of arr) {
        if (mayor.edad < usuario.edad) {
            mayor = usuario;
        }
    }
    return mayor;
}

console.log(obtenerMayor(usuarios));   // { edad: 32, nombre: 'Fernanda', plan: 'free' }

// tarea para la casa: resolverlo con reduce
const obtenerMayorReduce = arr =>
    arr.reduce((mayor, usuario) => mayor.edad < usuario.edad ? usuario : mayor);

console.log(obtenerMayorReduce(usuarios));   // { edad: 32, nombre: 'Fernanda', plan: 'free' }
