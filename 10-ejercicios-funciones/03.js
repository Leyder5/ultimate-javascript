// Ejercicio 03: callback
// función que recibe otra función (fn) y el resto de los argumentos,
// y ejecuta fn pasándole esos argumentos
// (así funcionan por dentro métodos como filter, que reciben una función)

function callback(fn, ...rest) {
    // con el spread operator cada elemento de rest pasa como un argumento
    fn(...rest);
}

function log(...args) {
    console.log(args);
}

callback(log, 1, 2, 3, 4);   // [ 1, 2, 3, 4 ]

// lo mismo sin declarar la función, pasando una fat arrow function directamente
// (sintaxis parecida a la de filter o map)
callback((...args) => {
    console.log(args);
}, 1, 2, 3, 4);   // [ 1, 2, 3, 4 ]
