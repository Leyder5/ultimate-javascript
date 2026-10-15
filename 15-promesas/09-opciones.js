const url = 'https://jsonplaceholder.typicode.com/todos';
fetch(url, {                                                         // 2do argumento: objeto con las opciones
    method: 'POST', // PUT, PATCH, DELETE, GET                       // verbo HTTP (GET es el valor por defecto)
    body: JSON.stringify({ title: 'Hola mundo' }),                   // los datos se envían en formato JSON, no como objeto JS
    headers: {
        'Content-Type': 'application/json',                          // le indica al servidor que le enviamos JSON (comillas por el guion)
        Authorization: 'api key',                                    // credenciales / API key (con A mayúscula)
    },
    cache: 'no-cache', // default, reload, force-cache, only-if-cached   // no-cache: no usar respuestas guardadas por el servidor
})
    .then(response => {
        if (response.ok) {
            // return response.json();
            return response.text();                                  // { "title": "Hola mundo", "id": 201 }
        }
        return Promise.reject(response.status);
    })
    .then(data => console.log(data))
    .catch(message => console.log({ message }));
