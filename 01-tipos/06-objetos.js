// Lección 13: Objetos

let nombre= "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre: 'Tanjiro',
    anime: 'Demon Slayer',
    edad: 16,
};

console.log(personaje);

// Acceder a propiedades
console.log(personaje.nombre);       // notación de punto
console.log(personaje['anime']);     // notación de corchetes

// Modificar propiedades
personaje.edad = 13;
personaje['edad'] = 16;

// Los corchetes sirven cuando el nombre de la propiedad está en una variable
let llave = 'edad';
console.log(personaje[llave]);

// Eliminar una propiedad
delete personaje.anime;
console.log(personaje);
