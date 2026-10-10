// Ejercicio 6: crea copias
// función que crea una copia de un objeto SIN usar el operador ...,
// ni Object.assign, ni ninguna función que venga en JavaScript

function copiar(obj) {
    // objeto inicial sin ninguna propiedad
    let copia = {};
    // le vamos asignando cada propiedad con su valor
    for (let llave in obj) {
        copia[llave] = obj[llave];
    }
    return copia;
}

const obj1 = { id: 1, name: 'Chanchito' };
const obj2 = copiar(obj1);

// { obj1, obj2 } es lo mismo que { obj1: obj1, obj2: obj2 }
console.log({ obj1, obj2 });
console.log(obj1 === obj2);   // false: son objetos distintos
