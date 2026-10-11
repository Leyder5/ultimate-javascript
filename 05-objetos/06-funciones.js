
function Usuario(name) {
    this.name = name;
}

// propiedades de una función
console.log(Usuario.name);     // 'Usuario' (nombre de la función)
console.log(Usuario.length);   // 1 (cantidad de argumentos que recibe)

// asignar una función a una constante
const U = Usuario;
const user = new U('Nicolás');
console.log(user);   // Usuario { name: 'Nicolás' }

// pasar una función como argumento
// Fn con mayúscula para indicar que es una función (constructora)
function of(Fn, arg) {
    return new Fn(arg);
}

const user1 = of(Usuario, 'Chanchito');
console.log(user1);   // Usuario { name: 'Chanchito' }

// retornar una función desde otra función
function retornar() {
    // función anónima
    return function () {
        console.log('Hola mundo!');
    };
}

const saludo = retornar();
saludo();   // Hola mundo!
