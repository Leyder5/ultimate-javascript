// Lección 121: Prototipos vs instancias

// Problema: si el método se define dentro del constructor, CADA instancia
// crea su propia función (con miles de instancias, miles de funciones)
// function User(name) {
//     this.name = name;
//     this.login = function () {
//         console.log('iniciando sesión');
//     };
// }
// const user1 = new User('Hola mundo');
// const user2 = new User('Chanchito feliz');
// console.log(user1.login === user2.login);   // false

function User(name) {
    this.name = name;
    // método de INSTANCIA: cada objeto tiene el suyo
    // (úsalo cuando no sea necesario optimizar)
    this.logger = function () {
        console.log('logueando');
    };
}

// todas las funciones tienen la propiedad prototype
// (un objeto con constructor apuntando a User y como prototipo el de Object)
// console.log(User.prototype);

// método de PROTOTIPO: una sola función compartida por todas las instancias
// (úsalo para crear cadenas de prototipos o para optimizar)
User.prototype.login = function () {
    // this es el objeto que lo usa (la instancia), no el prototipo
    // desde el prototipo se puede llamar a métodos de la instancia y viceversa
    // (ojo: si login llama a logger y logger a login, se crea un loop infinito)
    this.logger();
    console.log('iniciando sesión', this.name);
};

// interceptar la cadena de prototipos: User.prototype también tiene toString,
// así que JavaScript ya no sube hasta el toString de Object
User.prototype.toString = function () {
    return `Usuario: ${this.name}`;
};

const user1 = new User('Hola mundo');
const user2 = new User('Chanchito feliz');

console.log(user1.login === user2.login);   // true: es la misma función
user1.login();                    // logueando / iniciando sesión Hola mundo
console.log(user1.toString());    // Usuario: Hola mundo

// los métodos de prototipo se pueden definir después de crear las instancias,
// lo importante es definirlos ANTES de llamarlos
