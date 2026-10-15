// HTMLElement
let htmlElement = document.getElementById('cuerpo');                  // busca por id: devuelve UN elemento (HTMLDivElement)

// HTMLCollection <- se parece a un array pero no lo es
let elementosRed = document.getElementsByClassName('red');            // busca por clase de CSS

// NodeList
let elementosChanchito = document.getElementsByName("chanchito");     // busca por el atributo name

// HTMLCollection
let parrafos = document.getElementsByTagName('p');                    // busca por etiqueta

// HTMLElement <- solo un elemento!
let el = document.querySelector('#cuerpo');                           // # para id, . para clase, o el nombre de la etiqueta
// NodeList
let els = document.querySelectorAll('p');                             // querySelector/All son más lentos (recorren todo el documento)

let plive = document.getElementsByTagName('p');                       // HTMLCollection: SIEMPRE refleja los cambios del DOM
let pstatic = document.querySelectorAll('p');                         // NodeList: NO se actualiza, hay que volver a buscar
console.log(plive, pstatic);                                          // HTMLCollection(4) NodeList(4)

let nuevoP = document.createElement('p');                             // crea un nuevo párrafo
document.body.append(nuevoP);                                         // y lo agrega al body

console.log(plive, pstatic);                                          // HTMLCollection(5) NodeList(4)
