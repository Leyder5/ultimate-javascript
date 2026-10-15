let el = document.createElement('p');                                // crea un elemento <p>

el.innerText = "Elemento creado";                                    // cambia el texto del elemento

document.body.append(el);                                            // lo agrega al final del body

// el.innerText = "<ul><li>Hola mundo</li></ul>";                     // innerText: el HTML se muestra como TEXTO plano
// el.innerHTML = "<ul><li>Hola mundo</li></ul>";                     // innerHTML: el HTML SÍ se interpreta

el.style = 'background-color: red; font-weight: bold;';              // estilos en línea
el.className = 'parrafo';                                            // la clase se asigna con className (no con class)
el.id ='mi-parrafo';                                                 // identificador único
// lo siguiente no sirve!
// el.mipropiedad = 'mi propiedad';                                  // una propiedad inventada no aparece en el HTML

el.setAttribute('mipropiedad', 'mi propiedad');                      // así sí se agrega un atributo personalizado
el.getAttribute('mipropiedad');                                      // obtiene su valor: 'mi propiedad'
el.hasAttribute('mipropiedad');                                      // true si el elemento tiene ese atributo
