let form = document.createElement('form');                           // un formulario pequeñito
form.id = 'mi-formulario';
let input = document.createElement('input');
input.type = 'text';
let btn = document.createElement('button');
btn.innerText = 'Enviar';
form.append(input);
form.append(btn);

document.body.append(form);

form.onmouseenter = e => {                                           // cuando el mouse ENTRA al elemento
    console.log('entra el mouse', e);                                // e (event): clientX/Y, fromElement y target (el elemento)
}

form.onmouseleave = e => {                                           // cuando el mouse SALE del elemento
    console.log('sale el mouse');
}

input.onfocus = e => {                                               // cuando se pincha dentro del campo de texto
    console.log('input con focus');
}

input.onblur = e => {                                                // cuando se pincha FUERA después de tener el foco
    console.log('input perdió el foco');                             // (muy usado para guardar sin botón de guardar)
}

input.onchange = e => {                                              // cuando cambia el valor del campo
    console.log('valor cambia', e.target.value);                     // e.target es el input; .value su valor
}

// btn.onclick = e => {
//     e.preventDefault();                                           // evita que el formulario recargue la página
//     console.log('botón clickeado');
// }

btn.addEventListener('click', e => {                                 // otra forma: addEventListener('click', ...) sin el "on"
    e.preventDefault();
    console.log('botón clickeado');
});
