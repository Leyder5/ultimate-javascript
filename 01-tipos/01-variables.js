// Lección 6: Variables
// Una variable es una "caja" con nombre que guarda un valor en memoria
let nombre = "Hola mundo";

console.log(nombre);

// Si se declara sin valor, su valor es undefined
let sinValor;
console.log(sinValor);

// Lección 7: Reglas para nombrar variables
// - Deben empezar con letra o guion bajo (no con números)
// - No pueden llamarse como palabras reservadas (let, typeof, etc.)
// - JavaScript es case sensitive: NombreCompleto y nombreCompleto son distintas

let NombreCompleto = 'Chanchito';   // UpperCamelCase
let nombreCompleto = 'Felipe';      // camelCase (la convención que usaremos en JS)
let nombre_completo = 'Felipe';     // snake_case

console.log(NombreCompleto);
console.log(nombreCompleto);

// Se puede declarar primero y asignar después (sin volver a usar let)
let apellido, animal;
apellido = 'Pérez';
animal = 'perro';

console.log(apellido, animal);
// Buena práctica: una variable por línea y con nombres que tengan sentido
