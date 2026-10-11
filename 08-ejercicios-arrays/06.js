// Ejercicio 06: dividePorTipo con reduce
// devuelve un objeto cuyas propiedades son los tipos de dato (lo que devuelve typeof)
// y cada propiedad contiene un array con los elementos de ese tipo

function dividePorTipo(arr) {
    // el objeto parte vacío: no conocemos su forma, las propiedades se agregan bajo demanda
    return arr.reduce((acc, el) => {
        const llave = typeof el;
        // si la propiedad todavía no existe (undefined) le asignamos un array vacío
        acc[llave] = acc[llave] ? acc[llave] : [];
        acc[llave].push(el);
        // reduce necesita que retornemos el acumulador
        return acc;
    }, {});
}

const arr = ['hola', 12, true, 'mundo', {}, { id: 1 }, ['lala']];
const r = dividePorTipo(arr);
console.log(r);
// {
//   string: [ 'hola', 'mundo' ],
//   number: [ 12 ],
//   boolean: [ true ],
//   object: [ {}, { id: 1 }, [ 'lala' ] ]
// }
