const url = 'https://jsonplaceholder.typicode.com/todos/a';           // API de pruebas (con /todos/1 sí existe; con /a da error 404)
fetch(url)                                                           // fetch(url, opciones) devuelve una promesa (await solo sirve dentro de async)
    .then(response => {                                              // response: status, ok, headers, url, body...
        if (response.ok) {                                           // ok es true solo si el código está entre 200 y 299
            // return response.json();                               // convierte la respuesta en un objeto (si no es JSON válido, da error)
            return response.text();                                  // la devuelve como texto
        }
        return Promise.reject(response.status);                      // fetch NUNCA falla con errores del servidor (404, 500...):
    })                                                               // hay que rechazar la promesa a mano para caer en el catch
    .then(data => console.log(data))
    .catch(message => console.log({ message }));                     // { message: 404 }
