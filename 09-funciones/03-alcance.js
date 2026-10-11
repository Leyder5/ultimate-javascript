let afuera = 'estoy afuera';                    // variable definida fuera de la función

function alcance() {                            // todo lo que se crea aquí dentro pertenece a su alcance
    console.log(afuera);                        // desde dentro SÍ se puede leer lo de afuera
    afuera = 'estoy dentro';                    // y también cambiarlo
    function saludo() {}                        // saludo, vieja, variable y constante solo existen
    var vieja = 'ya no usar';                   // dentro de estas llaves (fuera: ReferenceError)
    let variable = 'Hola mundo';                // dentro también hay hoisting, con las mismas
    const constante = 'Hola Mundo!';            // reglas que vimos en el video anterior
}

console.log(afuera);                            // estoy afuera
alcance();                                      // imprime: estoy afuera

console.log(afuera);                            // estoy dentro (la función lo cambió)
