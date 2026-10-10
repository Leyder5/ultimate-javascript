// Ejercicio 4: cuáles son métodos
// función que recibe un objeto e imprime el nombre de las propiedades
// que son funciones (métodos)

function metodos(obj) {
    for (let llave in obj) {
        if (typeof obj[llave] === 'function') {
            // solo mostramos el nombre, no lo ejecutamos
            console.log(llave);
        }
    }
}

const user = {
    id: 1,
    name: 'Nico',
    login() {
        console.log('logueando');
    },
    logout() {
        console.log('saliendo');
    },
};

metodos(user);
// login
// logout
