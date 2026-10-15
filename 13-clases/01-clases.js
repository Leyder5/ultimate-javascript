const u = new User('Chanchito Feliz');            // funciona ANTES de declarar User: las funciones constructoras se izan (hoisting)
function User(name) {                             // función constructora
    this.name = name;
    this.instancia = function () {}               // método de INSTANCIA: queda dentro del mismo objeto
}

User.prototype.login = function () {              // método de PROTOTIPO
    console.log('Hola mundo!');
}

// class User {                                   // class es azúcar sintáctica: por debajo sigue usando prototipos
//  constructor(name) {                           // constructor: lo que iba dentro de la función constructora
//      this.name = name;
//      this.instancia = function() {}            // función asignada en el constructor: va a la instancia
//  }

//  activo = true;                                // propiedad que no depende del constructor: va a la instancia

//  logout() {                                    // métodos escritos así van al PROTOTIPO
//      console.log('logout');                    // (si fuera logout = () => {} iría a la instancia)
//  }

//  login() {
//      console.log('Hola Mundo');
//  }
// }                                              // las clases NO se izan: usarla antes da ReferenceError
                                                  // y llamarla sin new da TypeError: cannot be invoked without 'new'
