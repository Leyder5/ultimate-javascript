// Ejercicio 02: dividePorTipo
// función que recibe un array con distintos tipos de datos y devuelve
// un objeto con las propiedades numeros, strings y objects
// (recuerda: typeof de un array también es 'object')

function dividePorTipo(arr) {
    return {
        numeros: arr.filter(n => typeof n === 'number'),
        strings: arr.filter(n => typeof n === 'string'),
        objects: arr.filter(n => typeof n === 'object'),
    };
}

const arr = ['hola', 12, 'mundo', {}, { id: 1 }, ['lala']];
const resultado = dividePorTipo(arr);
console.log(resultado);
// {
//   numeros: [ 12 ],
//   strings: [ 'hola', 'mundo' ],
//   objects: [ {}, { id: 1 }, [ 'lala' ] ]
// }
