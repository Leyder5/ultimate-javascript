// Reduce todo el contenido de un array a un solo valor
// (reduceRight hace lo mismo, pero de derecha a izquierda)

const numeros = [1, 2, 3, 4];

// reduce(función(acumulador, elemento), valor inicial del acumulador)
// el acumulador siempre es lo que retorna la función
const suma = numeros.reduce((acumulador, elemento) =>
    acumulador + elemento, 0);
// 0 + 1 = 1 -> 1 + 2 = 3 -> 3 + 3 = 6 -> 6 + 4 = 10
console.log(suma);   // 10

// aplanar un array anidado
const anidado = [[1, 2], 3, [4, 5]];
const plano = anidado.reduce((acc, el) =>
    acc.concat(el), []);
console.log(plano);   // [ 1, 2, 3, 4, 5 ]

// crear un índice para buscar rápido en arrays MUY grandes
// (miles o millones de elementos), en lugar de usar find
const usuarios = [
    { edad: 17, nombre: 'Nico' },
    { edad: 15, nombre: 'Chanchito' },
    { edad: 25, nombre: 'Felipe' },
    { edad: 32, nombre: 'Fernanda' },
];

const indexado = usuarios.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}), {});
console.log(indexado);
console.log(indexado['Felipe']);   // { edad: 25, nombre: 'Felipe' }
