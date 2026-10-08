// Lección 10: Constantes
let nombre = 'Hola mundo';
nombre = 'Chanchito feliz';     // con let SÍ se puede reasignar
console.log(nombre);

const saludo = 'Hola mundo';
// saludo = 'Chanchito feliz';  // TypeError: Assignment to constant variable.
console.log(saludo);

// Regla general: usar const casi siempre y let solo cuando el valor deba cambiar
