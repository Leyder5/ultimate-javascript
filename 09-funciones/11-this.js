// Lección 109: this
// - dentro de un objeto (método): this hace referencia al objeto
// - dentro de una función: this hace referencia a window (navegador) o global (Node)
// - si se usa new: this hace referencia al objeto que será creado

// 1. dentro de un objeto
const user = {
    name: 'Nicolas',
    login() {
        console.log(this);
    },
};

// también se pueden agregar métodos con la notación de punto;
// dándole nombre a la función, deja de aparecer como anónima
user.logout = function logout() {
    console.log(this);
};

user.login();    // { name: 'Nicolas', login: [Function: login], logout: [Function: logout] }
user.logout();   // el mismo objeto

// 2. dentro de una función
// function log() {
//     console.log(this);   // window en el navegador
// }
// log();

// 3. con new (función constructora, con mayúscula)
function Log(mensaje) {
    this.mensaje = mensaje;
    console.log(this);
}

const l = new Log('Hola mundo');   // Log { mensaje: 'Hola mundo' }

// al usar new ocurren 4 cosas:
// 1. se crea un objeto literal
// 2. se vincula ese objeto a this
// 3. se vincula el prototipo (se ve en la sección de prototipos)
// 4. si la función no retorna nada, retorna this
