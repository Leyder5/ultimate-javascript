// Ejercicio 07: groupBy
// función que recibe un array y el nombre de una propiedad, y agrupa
// los elementos en un objeto según el valor de esa propiedad
// (existe algo parecido en Object, pero aquí lo construimos desde cero)

const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 15, nombre: 'Chanchito', plan: 'premium' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
];

function groupBy(arr, prop) {
    return arr.reduce((acc, el) => {
        // valor de la propiedad: 'premium', 'free' o 'gold'
        const valor = el[prop];
        // si la propiedad aún no existe en el acumulador, le asignamos un array vacío
        acc[valor] = acc[valor] ? acc[valor] : [];
        acc[valor].push(el);
        return acc;
    }, {});
}

const group = groupBy(usuarios, 'plan');
// { group } es lo mismo que { group: group }
console.log({ group });
// {
//   group: {
//     premium: [ Nico, Chanchito ],
//     gold: [ Felipe ],
//     free: [ Fernanda ]
//   }
// }
