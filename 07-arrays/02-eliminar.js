// Lección 75: Eliminar elementos

const letras = ['a', 'b', 'c', 'd'];

// final: pop elimina el último elemento y lo devuelve
// const final = letras.pop();
// console.log(final, letras);   // d [ 'a', 'b', 'c' ]

// comienzo: shift elimina el primer elemento y lo devuelve
// const comienzo = letras.shift();
// console.log(comienzo, letras);   // a [ 'b', 'c', 'd' ]

// entre medio: splice(índice de inicio, cuántos eliminar)
// letras.splice(1, 1);   // [ 'a', 'c', 'd' ]
letras.splice(1, 2);
console.log(letras);   // [ 'a', 'd' ]
