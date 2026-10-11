// Ejercicio 01: extender un objeto con una función constructora
// usando call para cambiar el contexto de this

const obj = {
    nombre: 'Nicolas',
};

function Extender() {
    // this será obj, que ya tiene la propiedad nombre
    // las fat arrow functions toman el this de afuera (obj)
    this.login = () => {
        console.log('Iniciando sesión', this.nombre);
    };
    this.logout = () => {
        console.log('Cerrando sesión', this.nombre);
    };
}

Extender.call(obj);
console.log(obj);   // { nombre: 'Nicolas', login: [Function], logout: [Function] }

obj.login();    // Iniciando sesión Nicolas
obj.logout();   // Cerrando sesión Nicolas
