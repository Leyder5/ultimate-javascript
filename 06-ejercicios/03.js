// Ejercicio 3: objetos similares
// función que devuelve true si dos objetos tienen las mismas propiedades
// con los mismos valores, y false si no

function similares(obj1, obj2) {
    // asumimos que son iguales hasta encontrar un valor distinto
    let distintos = false;
    for (let llave in obj1) {
        if (obj1[llave] !== obj2[llave]) {
            distintos = true;
        }
    }
    // la función pregunta si son similares, así que se devuelve la negación
    return !distintos;
}

console.log(similares({ id: 1, name: 'Nico' }, { id: 1, name: 'Lalo' }));   // false
console.log(similares({ id: 1, name: 'Nico' }, { id: 1, name: 'Nico' }));   // true
