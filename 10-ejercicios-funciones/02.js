// Ejercicio 02: función extender (con minúscula) que recibe un usuario
// y lo devuelve con los métodos login y logout, SIN usar call ni apply

const usuario = {
    nombre: 'Nicolas',
};

function extender(usuario) {
    // otra opción válida: usuario.login = ...; usuario.logout = ...; return usuario;
    const metodos = {
        // métodos normales (no fat arrow) para que this sea el usuario
        login() {
            console.log('Iniciando sesión', this.nombre);
        },
        logout() {
            console.log('Cerrando sesión', this.nombre);
        },
    };
    // Object.assign le agrega al primer argumento las propiedades de los demás
    return Object.assign(usuario, metodos);
}

extender(usuario);
console.log(usuario);   // { nombre: 'Nicolas', login: [Function], logout: [Function] }
usuario.login();        // Iniciando sesión Nicolas
