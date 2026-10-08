// Lección 35: for in -> recorre las PROPIEDADES de un objeto
let user = {
    id: 1,
    name: 'Chanchito feliz',
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

// También funciona con arrays (devuelve los índices), pero es mejor for of
let animales = ['chanchito feliz', 'dragón', 'canguro'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}
