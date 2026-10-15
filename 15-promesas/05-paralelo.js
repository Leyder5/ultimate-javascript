const p1 = Promise.reject('Fallo en conexión al servidor');          // al rechazar, mejor pasar la RAZÓN del fallo (no solo un número)
const p2 = Promise.reject(42);                                       // un valor primitivo también se considera promesa
const p3 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, 'foo');                                   // el 3er argumento de setTimeout se le pasa a reject/resolve
});

// Promise.all([p1, p2, p3])                                         // espera a que TODAS se resuelvan (en paralelo): [3, 42, 'foo']
//     .then(valores => console.log('all', valores))                 // si UNA se rechaza, cae al catch de inmediato
//     .catch(e => console.log('error en all', e));

// Promise.race([p1, p2, p3])                                        // toma la PRIMERA que termine (resuelta o rechazada)
//     .then(valor => console.log('race', valor))
//     .catch(e => console.log('error en race', e));

// Promise.any([p1, p2, p3])                                         // toma la primera RESUELTA (ignora las rechazadas)
//     .then(valor => console.log({ valor }))                        // si TODAS se rechazan, cae al catch
//     .catch(e => console.log({ e }));

Promise.allSettled([p1, p2, p3])                                     // espera a todas y NUNCA cae al catch:
    .then(valores => console.log({ valores }))                       // [{ status: 'fulfilled', value } o { status: 'rejected', reason }]
    .catch(e => console.log({ e }));
