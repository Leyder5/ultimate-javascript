function getProto(u) {                              // atajo para no escribir Object.getPrototypeOf cada vez
    return Object.getPrototypeOf(u);                // devuelve el prototipo del objeto que recibe
}
function Entidad() {}                               // función constructora "padre"

Entidad.prototype.save = function () {              // método save en el prototipo de Entidad
    console.log('guardando desde entidad...');
}

function User() {}                                  // función constructora "hija"

User.prototype.save = function () {                 // method override: User crea su propio save con el MISMO nombre
    console.log('guardando desde User...');         // (por ejemplo, si el usuario se guarda en otro servicio)
}

Object.setPrototypeOf(User.prototype, Entidad.prototype);   // User hereda de Entidad

const u = new User();                               // u.save() usaría el de User: se encuentra primero en la cadena
console.log(getProto(getProto(u)).save());          // prototipo de u -> User.prototype -> Entidad.prototype: llama al save de Entidad
