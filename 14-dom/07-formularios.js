let validate = data => {                                             // valida los datos y devuelve un objeto con los errores
    let errors = {};
    if (!data.name) {                                                // si el campo viene vacío...
        errors.name = 'Campo obligatorio';                           // ...agrega el error con el mismo nombre del campo
    }
    if (!data.lastname) {
        errors.lastname = 'Campo obligatorio';
    }

    return errors;
}

let initialValues = {                                                // valores iniciales del formulario
    name: '',                                                        // (sin ellos, data.name sería undefined al renderizar)
    lastname: '',
}

let render = ({ data, errors }) => {                                 // devuelve el HTML del formulario con un template string
    return `
        <form name='formulario'>
            <div>
                <label>Nombre:</label>
                <input name="name" value="${data.name}" />           <!-- value mantiene lo escrito al volver a renderizar -->
                ${errors.name || ''}
            </div>
            <div>
                <label>Apellido:</label>
                <input name="lastname" value="${data.lastname}" />
                ${errors.lastname || ''}
            </div>
            <div><button>Enviar</button></div>
        </form>
    `
}

let form = document.createElement('form')
form.innerHTML = render({ data: initialValues, errors: {} });        // primer renderizado: sin errores
document.body.append(form);

form.addEventListener('submit', e => {                               // submit: al presionar Enviar o Enter en el formulario
    e.preventDefault();                                              // evita que la página se refresque
    let data = Array.from(e.target.elements).reduce((acc, el) => {   // e.target.elements: todos los campos del formulario
        if (!el.name) return acc;                                    // ignora los que no tienen name (el botón)
        acc[el.name] = el.value;                                     // { name: '...', lastname: '...' }
        return acc;
    }, {})

    const errors = validate(data);

    if (Object.keys(errors).length > 0) {                            // si hay al menos un error...
        let html = render({ errors, data });                         // ...vuelve a renderizar mostrando los errores
        form.innerHTML = html;
        return;
    }

    // utilizar promesas o asincronía enviar los datos                (se ve en la siguiente sección)

})                                                                   // abrir form.html en el navegador para probarlo
