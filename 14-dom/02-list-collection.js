let collection = document.getElementsByTagName('p');                 // HTMLCollection
let list = document.querySelectorAll('p');                           // NodeList
console.log(collection, list);

// let item1 = collection.namedItem('chanchito');                    // HTMLCollection: buscar por el atributo name
// let item2 = collection.item(3);                                   // o por índice (empieza en 0)
// let item3 = collection[3];                                        // o con corchetes, como un array (pero NO es un array)

// collection.forEach(x => console.log(x))                           // ERROR: HTMLCollection no tiene forEach

// iterar elementos
// for (let el of collection)                                        // forma 1: for of (solo índices numéricos, no 'chanchito')
//     console.log(el);

// Array.from(collection).forEach(x => console.log(x));              // forma 2: convertirla en array (muestra el objeto)
// [...collection].forEach(x => console.log(x));                     // forma 3: spread operator (muestra el elemento)

// let item1 = list.item(3);                                         // NodeList: solo por índice (no tiene namedItem)
// let item2 = list[3];

list.forEach(x => console.log(x));                                   // NodeList SÍ tiene forEach

// entries, keys y values.

let entries = list.entries();                                        // devuelven ITERADORES, no arrays:
let keys = list.keys();                                              // entries.next() -> { done: false, value: [0, p] }
let values = list.values();                                          // cuando termina: { done: true, value: undefined }

[...list].forEach(el => console.log(el));                            // para usar todos los métodos de array: spread operator
