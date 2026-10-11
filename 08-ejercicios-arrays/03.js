// Ejercicio 03: getPaidUsers
// función que devuelve solo los usuarios que NO tienen el plan free
// (planes: premium, free y gold)

const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 15, nombre: 'Chanchito', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
];

function getPaidUsers(users) {
    // truco: premium y gold tienen en común que no son 'free'
    return users.filter(u => u.plan !== 'free');
}

console.log(getPaidUsers(usuarios));
// [ { edad: 17, nombre: 'Nico', plan: 'premium' },
//   { edad: 25, nombre: 'Felipe', plan: 'gold' } ]
