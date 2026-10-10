// Lección 56: Valor y referencia
// Primitivos (string, number, boolean, null, undefined): se COPIAN
// Por referencia (objetos, arrays, funciones): se guarda la DIRECCIÓN en memoria

// dos objetos vacíos tienen direcciones distintas
const b = {};
const c = {};
console.log(b === c);   // false
const d = b;            // misma referencia
console.log(b === d);   // true

// Primitivos: b1 recibe una copia del valor de a1
let a1 = 1;
let b1 = a1;
b1++;
console.log(a1, b1);   // 1 2

// Objetos: b2 apunta al mismo objeto que a2
let a2 = {};
let b2 = a2;
b2.prop = 1;
console.log(a2, b2);   // { prop: 1 } { prop: 1 }

// Funciones con primitivos: el parámetro n es otra variable (copia)
let a3 = 1;
function suma(n) {
    n++;
}
suma(a3);
console.log(a3);   // 1

// Funciones con objetos: se pasa la referencia, se modifica el original
let a4 = { prop: 1 };
function sumaProp(n) {
    n.prop++;
}
sumaProp(a4);
console.log(a4);   // { prop: 2 }
