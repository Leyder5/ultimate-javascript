// Lección 61: Date
// Objeto para trabajar con fechas

// fecha actual de nuestra máquina local
// (si el computador tiene la fecha cambiada, se refleja aquí)
// const ahora = new Date();
// console.log(ahora);

// con un string en formato de Estados Unidos: mes día año hora zona horaria
const fecha = new Date('December 11 1986 14:15 GMT-0300');
console.log(fecha);   // se muestra en la zona horaria de tu computador

// con argumentos uno a uno: año, mes, día, hora, minutos (segundos y ms por defecto en 0)
// OJO: el mes es en base cero -> 0 es enero y 11 es diciembre
const fecha2 = new Date(1986, 11, 25, 14, 15);
console.log(fecha2);

// para pasar la hora a otra zona horaria se suma la diferencia horaria
// (el profe está en Nueva Zelanda GMT+12 y Chile es GMT-3: diferencia de 15)
// 14 + 15 = 29 -> JavaScript le resta 24 y pasa al día siguiente (26, a las 5)
const fecha3 = new Date(1986, 11, 25, 14 + 15, 15);
console.log(fecha3);

console.log('toDateString', fecha3.toDateString());   // formato corto y amigable para el usuario
console.log('toISOString', fecha3.toISOString());     // para enviar fechas entre cliente y servidor
console.log('toTimeString', fecha3.toTimeString());   // solo la hora con su zona horaria
// nunca envíes al servidor fechas como "26/11/1986 14:15": falta la zona horaria

// métodos get para obtener partes de la fecha
console.log(
    fecha3.getDate(),       // día del mes
    fecha3.getDay(),        // día de la semana (0 es domingo)
    fecha3.getFullYear(),   // año completo
    fecha3.getHours(),      // horas
    fecha3.getMinutes(),    // minutos
    fecha3.getMonth(),      // mes (base cero)
);

// métodos set para cambiar partes de la fecha
fecha3.setFullYear(1978);
console.log(fecha3);
