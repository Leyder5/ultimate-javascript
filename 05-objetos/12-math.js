// Lección 60: Math
// Objeto que viene incluido en JavaScript con propiedades y métodos matemáticos

console.log(
    Math.PI,              // 3.141592653589793
    Math.abs(-15),        // 15  valor absoluto
    Math.round(15.5),     // 16  redondea
    Math.round(15.4),     // 15
    Math.floor(15.9),     // 15  siempre hacia abajo
    Math.ceil(15.000001), // 16  siempre hacia arriba
    Math.pow(2, 3),       // 8   potencia: 2 elevado a 3
    Math.sqrt(9),         // 3   raíz cuadrada
);

// número pseudo aleatorio entre 0 y 1
console.log(Math.random());

// número aleatorio entre un mínimo y un máximo
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandom(1, 10));   // cambia cada vez que se ejecuta
