// Lección 11: Tipado dinámico
// En JS una misma variable puede cambiar de tipo
let numero = 42;
let nombre = 'Hola';
let verdadero = true;
let undef;
let nula = null;

nombre = 53;                    // pasó de string a number sin error
console.log(nombre);

nombre = 'Hola';
// typeof nos dice el tipo del valor
console.log(typeof numero);     // number
console.log(typeof nombre);     // string
console.log(typeof verdadero);  // boolean
console.log(typeof undef);      // undefined
console.log(typeof nula);       // object  <- curiosidad histórica de JS
