// Lección 14: Arrays
let animales = ['chanchito', 'caballo'];
console.log(animales);

// Los índices empiezan en 0
console.log(animales[0]);

// Agregar elementos por índice
animales[2] = 'dragón';
console.log(animales);

// Cuidado: un índice "salteado" deja espacios vacíos
animales[10] = 'pez';
console.log(animales);
console.log(animales[7]);           // undefined

console.log(typeof animales);       // object (los arrays son objetos)
console.log(animales.length);       // 11 -> ojo, se escribe length
