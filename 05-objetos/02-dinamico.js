// Lección 50: Dinamismo
// En JavaScript los objetos son dinámicos: se les pueden agregar o quitar
// propiedades y cambiar sus valores en cualquier momento

// si el objeto tiene pocas propiedades se puede escribir en una sola línea
// (siempre consultarlo con tu equipo)
const user = { id: 1 };

// aunque user es const, sí podemos agregarle propiedades
user.name = 'Nicolás';
// y también funciones (función anónima)
user.guardar = function () {
    console.log('guardando', user.name);
};

user.guardar();   // guardando Nicolás

// lo que NO podemos hacer es reasignar la constante
// user = 1;   // TypeError: Assignment to constant variable.

// con delete eliminamos propiedades
delete user.name;
delete user.guardar;

console.log(user);   // { id: 1 }

// Object.freeze: no se pueden agregar, quitar ni cambiar propiedades
// const user1 = Object.freeze({ id: 1 });
// user1.name = 'Nico';   // no la agrega (y no se queja)
// user1.id = 2;          // no le cambia el valor
// console.log(user1);    // { id: 1 }

// Object.seal: no se pueden agregar ni quitar propiedades,
// pero sí cambiar los valores de las que ya tiene
const user1 = Object.seal({ id: 1 });
user1.name = 'Nico';   // no la agrega
user1.id = 2;          // esto sí lo permite
console.log(user1);    // { id: 2 }
