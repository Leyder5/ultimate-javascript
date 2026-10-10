// Ejercicio 2: lo mismo que el ejercicio 1, pero con una factory function
// (sin usar new)

function createUsuario(name) {
    return {
        id: Math.random(),
        // forma corta de name: name
        name,
    };
}

const user = createUsuario('Nicolas');
const user2 = createUsuario('Chanchito');

console.log(user, user2);
// { id: 0.27..., name: 'Nicolas' } { id: 0.64..., name: 'Chanchito' }
// a diferencia del ejercicio 1, al comienzo no aparece "Usuario" porque no usamos new
