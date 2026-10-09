// Ejercicio 2: función que recibe el ancho y el alto de una pantalla
// y devuelve el nombre de su resolución
// 8K: 7680x4320, 4K: 3840x2160, WQHD: 2560x1440, FHD: 1920x1080, HD: 1280x720
// Si no llega a HD devuelve false

/* NOmbre: ancho x alto
 * 8K 7680 x 4320
 * 4K 3840 x 2160
 * WQHD 2560 X 1440
 * FHD 1920 X 1080
 * HD 1280 X 720
 */

function nombreResolucion(ancho, alto) {
    // se revisa de la más grande a la más chica,
    // si no una pantalla 4K entraría primero en HD
    if (ancho >= 7680 && alto >= 4320) {
        return '8K';
    } else if (ancho >= 3840 && alto >= 2160) {
        return '4K';
    } else if (ancho >= 2560 && alto >= 1440) {
        return 'WQHD';
    } else if (ancho >= 1920 && alto >= 1080) {
        return 'FHD';
    } else if (ancho >= 1280 && alto >= 720) {
        return 'HD';
    } else {
        return false;
    }
}

let nombre = nombreResolucion(3840, 2160);
console.log(nombre);                            // 4K

console.log(nombreResolucion(1366, 768));       // HD
console.log(nombreResolucion(800, 600));        // false
