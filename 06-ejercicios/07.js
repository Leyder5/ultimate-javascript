// Ejercicio 7: agregar ID
// función que le agrega a un objeto una propiedad id generada aleatoriamente
// (aprovecha el paso por referencia: modifica el mismo objeto)

function agregarId(obj) {
    // primero verificamos que lo que recibimos sea un objeto
    if (typeof obj === 'object') {
        obj.id = Math.random();
    }
    return obj;
}

const obj = { name: 'Nicolas' };
agregarId(obj);
console.log(obj);   // { name: 'Nicolas', id: 0.42... }
