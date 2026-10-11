// Lección 120: Prototipos


const x = {};

// en la consola de Chrome se ve como [[Prototype]]: Object
// x.__proto__ está DEPRECADO y no es parte de ECMAScript: nunca lo uses
// para ver el prototipo de un objeto se usa Object.getPrototypeOf
console.log(Object.getPrototypeOf(x));   // [Object: null prototype] {}

// {} es lo mismo que new Object(): el prototipo de x es el objeto
// que está en la propiedad prototype de la función constructora Object
console.log(Object.getPrototypeOf(x) === Object.prototype);   // true

// todos los objetos creados con el mismo constructor apuntan al MISMO prototipo
// (si se cambiara Object.prototype, cambiaría para todos los objetos)
const y = {};
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));   // true

// x no tiene el método toString, pero su prototipo sí:
// JavaScript lo busca en x, no lo encuentra y sube al prototipo
console.log(x.toString());   // [object Object]

// los arrays: sus métodos (push, reduce, map...) no están en el array,
// están en su prototipo, Array.prototype
const z = [];
console.log(Object.getPrototypeOf(z) === Array.prototype);   // true

// y Array.prototype a su vez tiene como prototipo a Object.prototype
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype);   // true
// a esto se le llama cadena de prototipos (prototype chain): z -> Array -> Object

// pero el resultado de toString cambia (se explica en el siguiente video)
console.log(z.toString());   // '' (string vacío)
