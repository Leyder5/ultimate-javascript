// Lección 124: Implementando herencia con prototipos

function User() {
    this.name = 'Hola mundo';
}

function Product() {
    this.name = 'Producto';
}

// sin herencia habría que repetir los métodos en cada prototipo:
// User.prototype.save = function () { ... };
// Product.prototype.save = function () { ... };

// función constructora "padre" con los métodos compartidos
function Entidad() {}

Entidad.prototype.save = function () {
    // Entidad no tiene name, pero User y Product sí
    console.log('guardando', this.name);
};

Entidad.prototype.validate = function () {
    console.log('validando', this.name);
};

// FORMA ANTIGUA 1: asignar el mismo prototipo
// User.prototype = Entidad.prototype;
// problema: el constructor queda como Entidad, hay que corregirlo:
// User.prototype.constructor = User;
// y así se pierde el constructor de Entidad en la cadena

// FORMA ANTIGUA 2: Object.create crea un objeto vacío
// cuyo prototipo es el que le pasamos (y preservamos el constructor)
// User.prototype = Object.create(Entidad.prototype);
// User.prototype.constructor = User;

// FORMA NUEVA (ECMAScript 6): setPrototypeOf(objeto base, prototipo)
// al prototipo de User le asignamos como prototipo el de Entidad
Object.setPrototypeOf(User.prototype, Entidad.prototype);
Object.setPrototypeOf(Product.prototype, Entidad.prototype);

// cadena: user -> User.prototype (constructor: User) -> Entidad.prototype (save, validate)
const user = new User();
const product = new Product();

console.log(user);              // User { name: 'Hola mundo' }
console.log(user.constructor);  // [Function: User]
user.save();                    // guardando Hola mundo
product.validate();             // validando Producto
