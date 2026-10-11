// Lección 128: Composición vs herencia


// Con HERENCIA:
//   Animal (camina, nada, vaAlBaño)
//     ├── Pato  (+ vuela)
//     └── Perro
// Luego llega el Pez (solo nada y va al baño): Animal ya no sirve porque
// el pez no camina, hay que crear otro prototipo encima:
//   NadaYVaAlBaño -> Camina -> Vuela
// Y luego un Avión (solo vuela, no va al baño): hay que desarmar toda la
// estructura y modificar 

// Con COMPOSICIÓN: pequeñas funcionalidades que se combinan para armar
// el objeto que se necesite y asignárselo al prototipo que corresponda
// (en JavaScript esto se hace con mixins, que se ven en el siguiente video)
//   vuela, nada, camina, vaAlBaño
//   Pato  = camina + nada + vuela + vaAlBaño
//   Perro = camina + nada + vaAlBaño
//   Pez   = nada + vaAlBaño
//   Avión = vuela

// Consejo: al usar herencia, máximo UN nivel de prototipo
// (ej: Entidad y todas las entidades heredan de ella).
// Si necesitas agregar uno entremedio, mejor usa mixins.
