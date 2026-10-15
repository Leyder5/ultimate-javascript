let promesa = new Promise((resolve, reject) => {                     // estados: pending (pendiente), fulfilled (cumplida), rejected (rechazada)
    setTimeout(() => resolve('Hola Mundo'), 1000);                   // después de 1 segundo se resuelve con 'Hola Mundo'
});                                                                  // con reject('Error de carga') quedaría rechazada

promesa.then(                                                        // then recibe dos funciones:
    valor => console.log(valor),                                     // onFulfilled: si la promesa se resuelve
    e => console.log('error', e),                                    // onRejected: si se rechaza (así la app no "explota")
)
