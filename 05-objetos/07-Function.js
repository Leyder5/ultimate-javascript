// Lección 55: Function
// Las funciones tienen un constructor (Function) y métodos como call y apply

function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function () {
        console.log('dibujando');
    };
}

// Crear la misma función con el constructor de Function:
// los argumentos y luego el cuerpo de la función como string.
// Es bueno saber que existe por si lo ves en código de otro,
// pero NUNCA lo utilices
// const Point = new Function('x', 'y', `
//     this.x = x;
//     this.y = y;
//     this.dibujar = function () {
//         console.log('dibujando');
//     };
// `);
// const p = new Point(1, 2);
// console.log(p);   // { x: 1, y: 2, dibujar: [Function] }

// call: el primer argumento es el contexto de this,
// luego los argumentos de la función uno a uno
// Punto.call({}, 1, 2) devuelve undefined porque Punto no retorna nada
// y new Punto.call(...) da error: Punto.call is not a constructor

// Lo útil es usarlo para extender un objeto que ya existe
const punto = { z: 7 };
Punto.call(punto, 1, 2);
console.log(punto);   // { z: 7, x: 1, y: 2, dibujar: [Function] }

// apply hace lo mismo que call, pero los argumentos van en un array
const punto2 = { z: 7 };
Punto.apply(punto2, [1, 2]);
console.log(punto2);  // { z: 7, x: 1, y: 2, dibujar: [Function] }
