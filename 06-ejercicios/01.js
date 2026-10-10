// Ejercicio 1: construye usuarios con una función constructora
// cada usuario debe tener un name y un id generado con Math.random

function Usuario(name) {
    this.id = Math.random();
    this.name = name;
}

const user = new Usuario('Nicolas');
const user2 = new Usuario('Chanchito');

console.log(user, user2);
// Usuario { id: 0.53..., name: 'Nicolas' } Usuario { id: 0.81..., name: 'Chanchito' }
