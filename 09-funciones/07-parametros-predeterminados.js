// Lección 105: Parámetros predeterminados
// Ejemplo: configuración para conectarse a una API
// (bucket: donde se guardan los archivos, por ejemplo en Amazon S3)

// forma antigua de dar un valor por defecto
// function configurarApi(url) {
//     const defaultUrl = url || 'https://holamundo.io';
//     return `${defaultUrl}`;
// }

// forma nueva: el valor por defecto se asigna en el mismo parámetro
function configurarApi(url = 'https://holamundo.io') {
    return `${url}`;
}

console.log(configurarApi());                       // https://holamundo.io
console.log(configurarApi('https://chaomundo.io'));   // https://chaomundo.io

// Parameter destructuring: recibir un objeto y sacar de él la propiedad url
// el valor por defecto es un objeto; sin él, si no le pasamos nada
// da error: no se puede leer la propiedad url de undefined
function configurarApi2({ url } = { url: 'por defecto' }) {
    return url;
}

const config = { url: 'https://holamundo.io', bucket: 145, port: 80 };
console.log(configurarApi2(config));   // https://holamundo.io
console.log(configurarApi2());         // por defecto

// si un parámetro tiene valor por defecto, todos los que vienen
// a su DERECHA también deberían tenerlo (si no, quedan undefined)
function configurarApi3(url, bucket = 145, port = 80) {
    return `${url}/${bucket}:${port}`;
}

console.log(configurarApi3('https://holamundo.io'));   // https://holamundo.io/145:80

// se puede saltar un argumento pasando undefined, pero se ve feo, no se recomienda
console.log(configurarApi3('https://holamundo.io', undefined, 8080));   // https://holamundo.io/145:8080
