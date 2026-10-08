// Lección 21: Operadores de comparación
let a = 10;

// Relacionales: siempre devuelven true o false
console.log(a > 5);
console.log(a >= 5);
console.log(a < 5);
console.log(a <= 5);

// Igualdad
console.log(a == 10);       // true
console.log(a != 10);       // false
console.log(a == '10');     // true  -> == solo compara el valor
console.log(a === '10');    // false -> === compara valor Y tipo
console.log(a !== '10');    // true

// Recomendación: usar siempre === y !==
