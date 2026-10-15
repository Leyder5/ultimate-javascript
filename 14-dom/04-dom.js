let el = document.createElement('p');
el.innerText = 'Elemento creado';

// texto y nodos
document.body.append(el);                                            // agrega al FINAL (recibe texto o nodos)

el.remove();                                                         // elimina el elemento (necesitamos su referencia)

document.body.prepend(el);                                           // agrega al COMIENZO; un mismo elemento solo puede estar en un lugar

let div = document.createElement('div');
div.innerText = 'Soy un texto';

el.replaceWith(div);                                                 // reemplaza el (párrafo) por div

document.body.replaceChild(el, div);                                 // desde el padre: (elemento nuevo, elemento a reemplazar)
document.body.removeChild(el);                                       // elimina un hijo
document.body.appendChild(el);                                       // agrega al final, pero SOLO recibe nodos (no texto)

// document.body.insertBefore(div, el);                              // inserta div ANTES de el
document.body.insertAdjacentElement('beforebegin', div);             // antes de abrir la etiqueta (fuera del body)
document.body.insertAdjacentElement('afterbegin', div);              // al comienzo, dentro de la etiqueta
document.body.insertAdjacentElement('beforeend', div);               // al final, dentro de la etiqueta
document.body.insertAdjacentElement('afterend', div);                // después de cerrar la etiqueta

// document.body.insertAdjacentHTML();                               // igual pero solo inserta HTML (tarea: probarlo)
// document.body.insertAdjacentText();                               // igual pero solo inserta texto (vacíos dan error)
