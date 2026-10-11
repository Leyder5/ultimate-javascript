// Lección 122: Iterando propiedades

function User() {
    this.name = 'Hola mundo';
}

User.prototype.login = function () {
    console.log('iniciando sesión');
};

const user = new User();

// for in itera las propiedades del objeto Y las de su prototipo
// (solo un nivel: no llega a las del prototipo de Object)
for (let prop in user) {
    console.log(prop);   // name / login
}

// hasOwnProperty: true si la propiedad está en el MISMO objeto (no en el prototipo)
console.log(user.hasOwnProperty('name'));    // true
console.log(user.hasOwnProperty('login'));   // false (está en el prototipo)

// forma antigua de iterar solo las propiedades propias
for (let prop in user) {
    if (user.hasOwnProperty(prop)) {
        console.log(prop);   // name
    }
}

// solo las del prototipo: negando la expresión
for (let prop in user) {
    if (!user.hasOwnProperty(prop)) {
        console.log(prop);   // login
    }
}

// si solo necesitas un array con las propiedades de la instancia
console.log(Object.keys(user));   // [ 'name' ]
