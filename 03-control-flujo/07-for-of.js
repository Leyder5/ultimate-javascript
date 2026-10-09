// Lección 34: for of -> recorre los ELEMENTOS de un array
let animales = ['chanchito feliz', 'dragón', 'perrito'];

for (let animal of animales) {
    console.log(animal);
}

// Lo mismo, pero de forma manual con while
let i = 0;
while (i < animales.length) {
    console.log(animales[i]);
    i++; //para no entrar en un loop infinito
}
