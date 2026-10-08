// Lección 22: Operadores lógicos
console.log(true && true);    // true
console.log(true && false);   // false

// Ejemplo: plataforma de streaming
let mayor = false;
let suscrito = true;

console.log('Operador AND', mayor && suscrito);  // ambos deben ser true
console.log('Operador OR', mayor || suscrito);   // basta con uno true
console.log('Operador NOT', !mayor);             // invierte el valor

let soloCatalogoInfantil = !mayor;
console.log(soloCatalogoInfantil);
