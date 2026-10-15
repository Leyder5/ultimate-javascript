let controller = new AbortController();                              // permite abortar (cancelar) una petición
let { signal } = controller;                                         // object destructuring de la propiedad signal

async function getTodos() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    try {
        const response = await fetch(url, { signal });               // la opción signal vincula el fetch con el controller
        const data = await response.json();                          // json() también devuelve una promesa
        console.log(data);
    } catch (e) {
        console.log('error:', e)                                     // error: DOMException: The user aborted a request.
    }
}

getTodos();
controller.abort();                                                  // cancela la petición (ej: el usuario presiona "cancelar")
