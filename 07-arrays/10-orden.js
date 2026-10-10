// Lección 83: Ordenando arrays

// sort modifica el mismo array y lo ordena de menor a mayor
const numeros = [15, 10, -3];
numeros.sort();
console.log(numeros);   // [ -3, 10, 15 ]

// reverse invierte el orden (de mayor a menor)
numeros.reverse();
console.log(numeros);   // [ 15, 10, -3 ]

// también funciona con letras
const letras = ['z', 'a', 'd'];
letras.sort();
console.log(letras);   // [ 'a', 'd', 'z' ]

// PROBLEMA con mayúsculas: cada carácter tiene un número asignado (tabla ASCII)
// 'Z' es 90 y 'a' es 97, por eso 'Z' queda antes que 'a'
const conMayusculas = ['Z', 'a', 'd'];
// conMayusculas.sort();   // [ 'Z', 'a', 'd' ]

// a sort se le puede pasar una función que recibe a y b:
// a antes que b -> -1 / b antes que a -> 1 / son iguales -> 0
conMayusculas.sort((a, b) => {
    const aLower = a.toLowerCase();
    const bLower = b.toLowerCase();
    if (aLower < bLower) {
        return -1;
    }
    if (aLower > bLower) {
        return 1;
    }
    // no hace falta else: el return corta la ejecución
    return 0;
});
console.log(conMayusculas);   // [ 'a', 'd', 'Z' ]

// lo mismo con objetos
const usuarios = [
    { edad: 15, name: 'Felipe' },
    { edad: 25, name: 'Nicolas' },
    { edad: 13, name: 'Poly' },
];

usuarios.sort((a, b) => {
    // un if de una sola línea puede ir sin llaves
    if (a.edad < b.edad) return -1;
    if (a.edad > b.edad) return 1;
    return 0;
});
console.log(usuarios);   // Poly (13), Felipe (15), Nicolas (25)
