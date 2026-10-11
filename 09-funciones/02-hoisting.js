// Lección 100: let, var, const y function (hoisting)

console.log(saludo);   // la función completa
console.log(vieja);    // undefined
// console.log(hola);  // ReferenceError: Cannot access 'hola' before initialization
// console.log(chao);  // ReferenceError: Cannot access 'chao' before initialization
// console.log(saludar);   // ReferenceError: saludar is not defined (error distinto: no existe)

function saludo() {}
let hola = 'hola';
const chao = 'chao';
// var: forma de declarar variables de antes de ECMAScript 6
var vieja = 'ya no debes usar esto';

// Hoisting (izar o levantar), lo hace el motor de JavaScript:
// - function: lleva la función COMPLETA al comienzo del archivo
// - var: lleva la variable al comienzo, pero con valor undefined
// - let y const: también se llevan al comienzo, pero no se pueden
//   acceder antes de su inicialización (por eso el error)

// En el navegador, function y var quedan dentro del objeto window
// (let y const no). Esto puede reemplazar funciones de librerías de terceros
// que usen el mismo nombre, por ejemplo una función render
console.log(window);   // solo existe en el navegador

// Conclusión: usa SIEMPRE let y const, nunca var,
// y ten cuidado al crear funciones con function
