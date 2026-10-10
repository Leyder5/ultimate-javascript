// Ejercicio 5: propiedad existente
// función que devuelve true si el objeto tiene la propiedad indicada,
// incluso si el valor de esa propiedad es false

function tieneProp(obj, propiedad) {
    // listado de todas las propiedades del objeto
    const props = Object.keys(obj);
    // OJO: for of (el valor), no for in (que daría el índice del array)
    for (let prop of props) {
        if (propiedad === prop) {
            return true;
        }
    }
    // si recorrimos todas y no la encontramos
    return false;
}

const obj = { id: 1, name: false };

let propiedad = 'name';
console.log(tieneProp(obj, propiedad));   // true (aunque su valor sea false)

propiedad = 'lala';
console.log(tieneProp(obj, propiedad));   // false
