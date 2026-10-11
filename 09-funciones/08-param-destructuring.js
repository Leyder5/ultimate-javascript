// Lección 106: Param destructuring

// sin destructuring
// function webServer(config) {
//     return config.url;
// }

// object destructuring: "del objeto config saca la propiedad url
// y crea una constante con el mismo nombre"
// function webServer(config) {
//     const { url } = config;
//     return url;
// }

// lo mismo, pero directamente en los parámetros
function webServer({ url }) {
    return url;
}

console.log(webServer({ url: 'https://holamundo.io' }));   // https://holamundo.io

// destructuring de propiedades que contienen objetos
// (se vuelve engorroso rápido: si puedes evitarlo, evítalo)
const config = {
    url: 'https://holamundo.io',
    direccion: {
        calle: 'Hola mundo',
        numero: 80,
    },
};

function webServer2({ url, direccion: { calle } }) {
    console.log(calle);   // Hola mundo
    return url;
}

webServer2(config);

// array destructuring: se asigna por posición
const configuracion = ['https://holamundo.io', 145, 80];
// const [url, bucket, port] = configuracion;

// ...rest agrupa el resto de los elementos en un array
function webServer3([url, ...rest]) {
    console.log(rest);   // [ 145, 80 ]
    return url;
}

console.log(webServer3(configuracion));

// con objetos, ...rest agrupa el resto de las propiedades en un objeto
// (funciona en los parámetros o en una línea aparte)
function webServer4(config) {
    const { url, ...rest } = config;
    console.log(rest);   // { direccion: { calle: 'Hola mundo', numero: 80 } }
    return url;
}

webServer4(config);
