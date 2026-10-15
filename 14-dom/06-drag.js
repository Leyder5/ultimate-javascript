let id;                                                              // guarda el id del elemento que se está arrastrando
function createDraggable() {                                         // crea un elemento que se puede arrastrar
    let span = document.createElement('span');
    span.id = 'hola-mundo';
    span.innerText = 'Arrastrable';
    span.draggable = true;                                           // sin draggable = true no se puede arrastrar
    span.ondragstart = e => {                                        // al EMPEZAR a arrastrar
        id = e.target.id;                                            // guardamos su id (en vez de escribir 'hola-mundo' a mano)
    }

    return span;
}

function createDroppableArea() {                                     // crea un área donde soltar elementos
    let dropArea = document.createElement('div');
    dropArea.className = 'drop';                                     // clase de CSS definida en dragndrop.html

    dropArea.ondragenter = e => {                                    // al pasar POR ENCIMA arrastrando algo
        e.target.style.background = 'yellow';                        // background tiene prioridad sobre background-color
    }

    dropArea.ondragleave = e => {                                    // al SALIR de encima arrastrando algo
        e.target.style.background = '';                              // vuelve al color original
    }

    dropArea.ondragover = e => e.preventDefault();                   // evita que el elemento se devuelva a su lugar al soltarlo
    dropArea.ondrop = e => {                                         // al SOLTAR el elemento
        e.target.appendChild(document.getElementById(id));           // lo saca de donde estaba y lo mete en esta área
    }

    return dropArea;

}

let draggable = createDraggable();
let dropArea1 = createDroppableArea();
let dropArea2 = createDroppableArea();
document.body.append(dropArea1);
document.body.append(dropArea2);
document.body.append(draggable);                                     // abrir dragndrop.html en el navegador para probarlo
