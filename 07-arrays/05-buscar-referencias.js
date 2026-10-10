// Lección 78: Buscar referencias

const usuarios = [
    { id: 1, name: 'Chanchito' },
    { id: 2, name: 'Felipe' },
];

// indexOf no sirve: el objeto literal que le pasamos es un objeto NUEVO
// con otra referencia en memoria, aunque tenga las mismas propiedades
// const resultado = usuarios.indexOf({ id: 1, name: 'Chanchito' });
// console.log(resultado);   // -1

// find recibe una función que se ejecuta una vez por cada elemento
// y debe retornar true cuando es el elemento que buscamos
// const resultado = usuarios.find(function (usuario) {
//     return usuario.id === 1;
// });

// a esta función que devuelve true o false se le llama predicate
// con fat arrow function queda más corto y fácil de leer
const resultado = usuarios.find(usuario =>
    usuario.id === 1);
console.log(resultado);   // { id: 1, name: 'Chanchito' }

// OJO: find devuelve el PRIMER elemento que cumple la condición,
// por eso la propiedad que evaluamos debe ser única dentro del array

// findIndex devuelve el índice en lugar del elemento
const indice = usuarios.findIndex(usuario =>
    usuario.id === 1);
console.log(indice);   // 0
