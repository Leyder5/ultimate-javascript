# Video 1 — Guion corregido

Lecciones de las secciones 1 a 3: tipos (`01-tipos`), operadores (`02-operadores`) y control de flujo (`03-control-flujo`).

Cada parte tiene:
- **Qué pasó en el video**: los problemas concretos de la transcripción.
- **Guion**: el texto para leer o adaptar al grabar.

---

## Introducción

**Qué pasó en el video:** "acá estamos prácticamente iniciando desde cero acerca de en sí cómo funciona JavaScript, cuáles son sus ventajas, sus componentes, los elementos a manejar". Es general y no dice qué temas vas a cubrir. Además el video no habla de las ventajas de JavaScript.

**Guion:**
> En este video repaso los fundamentos de JavaScript que vimos en las primeras sesiones, en tres partes:
> 1. **Tipos de datos:** variables, constantes, tipos primitivos, objetos, arrays y funciones.
> 2. **Operadores:** aritméticos, de asignación, de comparación, lógicos, bitwise y ternario.
> 3. **Control de flujo:** `if`, `else`, los ciclos `while`, `do while`, `for`, `for of` y `for in`, y la instrucción `switch`.

---

## Cómo se ejecuta el código (`index.html`)

**Qué pasó en el video:** esto lo explicaste a los 8 minutos ("se me olvidó mencionar"), y dijiste "estos son los fáciles para poder leer los archivos". Muévelo al inicio.

**Guion:**
> Para ejecutar los archivos uso `index.html`. Dentro tiene una etiqueta `<script>` que apunta al archivo que quiero probar, por ejemplo `01-tipos/07-arrays.js`. Abro `index.html` en el navegador y el resultado de cada `console.log` aparece en la consola de las herramientas de desarrollador (F12).
>
> Para cambiar de lección, cambio la ruta del `src` en la etiqueta `<script>`.

---

## Variables (`01-variables.js`)

**Qué pasó en el video:** "nos indican cómo listar las variables" (es *declarar*, no listar). "con el LED" (es `let`). "un per camel case" (es UpperCamelCase). "Snake Cakes" (es snake_case). "el consolo" (es `console.log`).

**Guion:**
> Una variable guarda un valor en memoria con un nombre. Se declara con la palabra `let`: `let nombre = "Hola mundo";`. Si declaro una variable sin valor, como `let sinValor;`, su valor es `undefined`.
>
> Reglas para nombrar variables:
> - Deben empezar con una letra o guion bajo, nunca con un número.
> - No pueden usar palabras reservadas como `let` o `typeof`.
> - JavaScript distingue mayúsculas de minúsculas: `nombreCompleto` y `NombreCompleto` son dos variables distintas.
>
> Hay tres formatos comunes para nombres de varias palabras:
> - **UpperCamelCase:** cada palabra empieza con mayúscula → `NombreCompleto`
> - **camelCase:** la primera palabra en minúscula y las siguientes con mayúscula → `nombreCompleto`. Es la convención de JavaScript.
> - **snake_case:** todo en minúscula, separado con guion bajo → `nombre_completo`
>
> `console.log` muestra un valor en la consola del navegador. Lo uso para ver el resultado de cada línea.
>
> También puedo declarar una variable y asignarle el valor después, sin volver a escribir `let`: `apellido = 'Pérez';`.

---

## Tipos primitivos (`02-primitivos.js`)

**Qué pasó en el video:** "definidas por Java" (es JavaScript; Java es otro lenguaje). "el no definido o un definir" (es `undefined`). "el nolo lo que siempre devuelve nul". Sobre `typeof null` dijiste "por temas de políticas de JavaScript", que no es la razón.

**Guion:**
> Los tipos primitivos son los valores básicos de JavaScript:
> - `number`: números, enteros o decimales → `1`
> - `string`: texto entre comillas → `'Hola mundo'`
> - `boolean`: `true` o `false`
> - `undefined`: una variable que no tiene valor asignado
> - `null`: un valor vacío asignado a propósito. `undefined` significa "no se asignó nada"; `null` significa "se asignó la nada".

---

## Constantes (`03-constantes.js`)

**Qué pasó en el video:** la idea es correcta, pero la frase "declaramos la variable y declaramos lo que tenga más si adelante y lo intentamos cambiar" no se entiende. Falta el nombre del error.

**Guion:**
> Con `let` puedo reasignar el valor: `nombre = "Chanchito feliz"` funciona.
>
> Con `const` no. Si declaro `const saludo = "Hola mundo"` y después escribo `saludo = 'Chanchito feliz'`, JavaScript lanza el error `TypeError: Assignment to constant variable`.
>
> Regla general: uso `const` por defecto y `let` solo cuando el valor tiene que cambiar.

---

## Tipado dinámico (`04-tipado-dinamico.js`)

**Qué pasó en el video:** dijiste "el tipado dinámico es que nos muestra el tipo de valor". Eso lo hace `typeof`, no es la definición de tipado dinámico. "lo va a leer en estos botones" no se entiende.

**Guion:**
> Tipado dinámico significa que una variable puede cambiar de tipo durante la ejecución. `nombre` empieza como string con `'Hola'`, después le asigno `53` y pasa a ser number, sin ningún error. En lenguajes con tipado estático, como Java, eso daría error.
>
> Para saber el tipo de un valor uso el operador `typeof`:
> - `typeof numero` → `'number'`
> - `typeof nombre` → `'string'`
> - `typeof verdadero` → `'boolean'`
> - `typeof undef` → `'undefined'`
> - `typeof nula` → `'object'`
>
> El último resultado es un error de JavaScript que existe desde la primera versión del lenguaje. `null` es un tipo primitivo, pero `typeof null` devuelve `'object'`. No se corrigió porque cambiarlo rompería código existente.

---

## Comentarios (`05-comentarios.js`)

**Qué pasó en el video:** "o comentarios muchas". Falta decir la sintaxis.

**Guion:**
> Los comentarios son texto que JavaScript ignora. Sirven para explicar por qué el código hace algo.
> - Una línea: empieza con `//`
> - Varias líneas: entre `/*` y `*/`
> - El formato `/** ... */` es el que VS Code autocompleta y se usa para documentar funciones.

---

## Objetos (`06-objetos.js`)

**Qué pasó en el video:** "la alum de personaje", "mediante portretos", "los conciertos" (es *corchetes*). "el delite acá, o sea, definimos qué es lo que interesamos definida". "nos lo muestra como tal" sin decir qué muestra.

**Guion:**
> Un objeto agrupa datos relacionados. En vez de tres variables sueltas, `nombre`, `anime` y `edad`, creo el objeto `personaje` con esas tres propiedades.
>
> Hay dos formas de leer una propiedad:
> - **Notación de punto:** `personaje.nombre` → `'Tanjiro'`
> - **Notación de corchetes:** `personaje['anime']` → `'Demon Slayer'`
>
> Las dos sirven también para modificar: `personaje.edad = 13` y `personaje['edad'] = 16`.
>
> Los corchetes son necesarios cuando el nombre de la propiedad está guardado en una variable. Con `let llave = 'edad'`, escribo `personaje[llave]` y obtengo `16`. Si escribiera `personaje.llave`, JavaScript buscaría una propiedad que se llama literalmente "llave", y no existe.
>
> Para eliminar una propiedad uso `delete`: `delete personaje.anime`. Después de esa línea, el objeto solo tiene `nombre` y `edad`.

---

## Arrays (`07-arrays.js`)

**Qué pasó en el video:** "los arrayos rayos", "desde las comidas simples" (es *comillas*), "llamamos a mandar la propiedad y luego ya estaríamos llamando, mandando". "nuestro chanchito cabalado" (son dos elementos: 'chanchito' y 'caballo'). "la dirección de la regla nos dice de 11" (es la propiedad `length`).

**Guion:**
> Un array es una lista ordenada de valores. Se escribe entre corchetes y los elementos se separan con comas: `let animales = ['chanchito', 'caballo'];`.
>
> Cada elemento tiene un índice, y los índices empiezan en 0. `animales[0]` es `'chanchito'` y `animales[1]` es `'caballo'`.
>
> Para agregar un elemento asigno un valor a un índice: `animales[2] = 'dragón'`. Ahora el array tiene 3 elementos.
>
> Si asigno a un índice lejano, como `animales[10] = 'pez'`, los índices del 3 al 9 quedan vacíos. Al leer `animales[7]` el resultado es `undefined`.
>
> La propiedad `length` da la cantidad de posiciones del array. Después de agregar el índice 10, `animales.length` es `11`, porque cuenta de la posición 0 a la 10.
>
> `typeof animales` devuelve `'object'`: en JavaScript los arrays son un tipo de objeto.

---

## Funciones (`08-funciones.js`)

**Qué pasó en el video:** "que entones es otra palabra reservada" (es `function`). "asignamos una variable y designamos qué es lo que va a hacer". "mediante dos nos devuelve el resultado como tal". No se nombra `return`.

**Guion:**
> Una función es un bloque de código con nombre que se ejecuta cuando la llamo. Se declara con la palabra `function`, un nombre, paréntesis y llaves.
>
> La función `saludar` tiene un `console.log('Hola mundo')`. Declararla no la ejecuta: solo se ejecuta cuando escribo `saludar()`.
>
> La palabra `return` hace que la función devuelva un valor. `suma` devuelve `2 + 2`. Puedo guardar el resultado en una variable, `let resultado = suma()`, o usarlo directamente: `console.log(suma())` muestra `4`.

---

## Argumentos y parámetros (`09-argumentos.js`)

**Qué pasó en el video:** "los argumentos nos devuelven prácticamente lo que nosotros estamos trabajando", "que nos devuelva un outline". No se explica la diferencia entre parámetro y argumento, que es el tema de la lección.

**Guion:**
> Los **parámetros** son las variables que defino entre los paréntesis de la función: en `function suma(a, b)`, `a` y `b` son parámetros.
>
> Los **argumentos** son los valores que paso al llamar la función: en `suma(5, 6)`, `5` y `6` son argumentos. `a` recibe 5 y `b` recibe 6, y la función devuelve 11.
>
> Si paso más argumentos que parámetros, como `suma(5, 6, 1, 2, 3)`, JavaScript no da error: los valores extra se ignoran en `a + b`, pero quedan disponibles en el objeto `arguments`, que contiene todos los argumentos recibidos. Es una forma antigua de acceder a ellos.

---

## Operadores aritméticos (`01-aritmeticos.js`)

**Qué pasó en el video:** "lasciones", "sumación, perdón". Dijiste división dos veces y faltó la suma. "el módulo, que es lo que de la división" (falta *sobra*). En incremento y decremento la idea es correcta pero confusa.

**Guion:**
> Los operadores aritméticos hacen cálculos: suma `+`, resta `-`, multiplicación `*`, división `/`, módulo `%` y potencia `**`.
>
> El módulo devuelve el residuo de una división: `7 % 2` es `1`. La potencia eleva un número: `5 ** 2` es `25`.
>
> El incremento `++` suma 1 a una variable, y la posición del operador cambia el resultado:
> - `++a` (antes de la variable): primero suma y después devuelve el valor. Si `a` es 5, `console.log(++a)` muestra `6`.
> - `a++` (después de la variable): primero devuelve el valor actual y después suma. `console.log(a++)` muestra `6`, y en la línea siguiente `a` ya vale `7`.
>
> El decremento `--` funciona igual, pero resta 1.

---

## Operadores de asignación (`02-asignacion.js`)

**Qué pasó en el video:** dijiste "estamos haciendo la comparación entre una variable". La asignación no compara, guarda un valor.

**Guion:**
> El operador `=` asigna un valor a una variable. Los operadores de asignación compuestos hacen una operación y asignan el resultado en un solo paso:
> - `a += 5` es igual a `a = a + 5`. Si `a` vale 5, después vale 10.
> - `a -= 5`, `a *= 5`, `a /= 5`, `a %= 5` y `a **= 5` funcionan igual con su operación.

---

## Operadores de comparación (`03-comparacion.js`)

**Qué pasó en el video:** "estos dos elementos de acá son útiles más no tan recomendables, porque evalúan el resultado más no lo que sí tiene". Aquí está la idea más importante de la lección y no se entiende.

**Guion:**
> Los operadores de comparación devuelven siempre `true` o `false`.
>
> Los relacionales son `>`, `>=`, `<` y `<=`. Con `a = 10`, `a > 5` es `true` y `a < 5` es `false`.
>
> Para igualdad hay dos versiones:
> - `==` (igualdad débil) compara solo el valor y convierte los tipos si son distintos. `a == '10'` es `true` aunque uno sea number y el otro string.
> - `===` (igualdad estricta) compara el valor **y** el tipo. `a === '10'` es `false` porque 10 es number y '10' es string.
>
> Lo mismo pasa con `!=` y `!==`.
>
> Recomendación: usar siempre `===` y `!==`. La conversión automática de `==` produce resultados inesperados y errores difíciles de encontrar.

---

## Operadores lógicos (`04-logicos.js`)

**Qué pasó en el video:** "hacen an or not", "el all pues si uno de los dos sea verdadero", "el no pues que no sea o invierte". Faltan los símbolos y el ejemplo.

**Guion:**
> Los operadores lógicos combinan valores booleanos:
> - `&&` (AND): devuelve `true` solo si los dos valores son `true`.
> - `||` (OR): devuelve `true` si al menos uno es `true`.
> - `!` (NOT): invierte el valor. `!true` es `false`.
>
> Ejemplo de una plataforma de streaming con `mayor = false` y `suscrito = true`:
> - `mayor && suscrito` → `false`: no es mayor de edad.
> - `mayor || suscrito` → `true`: está suscrito.
> - `!mayor` → `true`. Lo guardo en `soloCatalogoInfantil`, porque si no es mayor de edad solo ve el catálogo infantil.

---

## Short circuit (`05-short-circuit.js`)

**Qué pasó en el video:** "nos hace el evalúo de que si es falso como tal", "es como OR, solo que es valor dentro de sí mismos", "AND los dos tienen que ser iguales". No se explica qué es short circuit ni qué es un valor falsy.

**Guion:**
> Short circuit (cortocircuito) significa que JavaScript deja de evaluar una expresión lógica en cuanto ya conoce el resultado.
>
> Primero hay que conocer los valores **falsy**: valores que JavaScript trata como `false` en una condición. Son `false`, `0`, `''` (string vacío), `null`, `undefined` y `NaN`. Todos los demás son **truthy**.
>
> **Con `||`:** devuelve el primer valor truthy que encuentra. En `let username = nombre || 'Anónimo'`, si `nombre` es `'Chanchito feliz'`, `username` vale `'Chanchito feliz'` y no se evalúa lo de la derecha. Si `nombre` es `''`, que es falsy, `username` vale `'Anónimo'`. Sirve para dar valores por defecto.
>
> **Con `&&`:** si el valor de la izquierda es falsy, no evalúa la derecha. En `fn1() && fn2()`, `fn1` devuelve `false`, así que `fn2` nunca se ejecuta y la consola solo muestra `'Soy función 1'`. Si `fn1` devolviera `true`, también se ejecutaría `fn2`.

---

## Operadores bitwise (`06-bitwise.js`)

**Qué pasó en el video:** es la parte más larga y confusa (de 16:55 a 20:20). Contaste bits en voz alta ("1 2 3 4 5 6 7 8"), te corregiste varias veces y dijiste resultados incorrectos ("el 01 nos da un valor de COC"). En el AND dijiste "evalúa si ambos son iguales", que es incorrecto: dos ceros también son iguales y el resultado es 0.

**Consejo:** muestra la tabla binaria en pantalla y compara los números en columna. No cuentes posiciones en voz alta.

**Guion:**
> Los operadores bitwise trabajan con la representación binaria de los números, bit por bit. En binario solo existen 0 y 1. En el archivo está la tabla del 1 al 7 en 8 bits; por ejemplo, 3 es `00000011` y 5 es `00000101`.
>
> El operador compara los bits que están en la misma posición, de derecha a izquierda.
>
> **OR bitwise `|`:** el resultado tiene 1 en cada posición donde **al menos uno** de los dos números tiene 1.
> ```
>   1 = 00000001
>   4 = 00000100
> 1|4 = 00000101 → 5
> ```
> `1 | 3` es `3` y `3 | 5` es `7`.
>
> **AND bitwise `&`:** el resultado tiene 1 solo en las posiciones donde **los dos** números tienen 1.
> ```
>   3 = 00000011
>   5 = 00000101
> 3&5 = 00000001 → 1
> ```
> `1 & 3` es `1` y `1 & 4` es `0`, porque no comparten ningún 1 en la misma posición.

---

## Orden de operaciones (`07-orden.js`)

**Qué pasó en el video:** "sumas y raíces" al final (son *sumas y restas*). "no total de 16".

**Guion:**
> JavaScript sigue el orden matemático: primero paréntesis, después potencias, después multiplicación y división, y al final suma y resta. Las operaciones del mismo nivel se resuelven de izquierda a derecha.
>
> En `8 / 2 * (2 + 2)`: primero el paréntesis da 4. Después, de izquierda a derecha, `8 / 2` da 4 y `4 * 4` da **16**.
>
> En `8 / (2 * (2 + 2))`: primero el paréntesis interno da 4, después `2 * 4` da 8, y `8 / 8` da **1**. Los paréntesis cambiaron el orden y el resultado.

---

## Operador ternario (`08-ternario.js`)

**Qué pasó en el video:** "los operadores externarios", "declaramos la variable desde 25" (es *edad*), y dijiste "si edad es menor de 17" cuando el código dice `edad > 17`.

**Guion:**
> El operador ternario evalúa una condición y devuelve uno de dos valores. La sintaxis es `condición ? valorSiEsVerdadero : valorSiEsFalso`.
>
> Con `edad = 25`: `edad > 17 ? 'Permitir ingreso' : 'No puede ingresar'`. Como 25 es mayor que 17, `acceso` vale `'Permitir ingreso'`. Si cambio `edad` a 16, vale `'No puede ingresar'`.

---

## if, else if y else (`01-if.js`, `02-else.js`)

**Qué pasó en el video:** "los control de app" (es *control de flujo*), "el els este es igual es un solo que este ya tiene otra instrucción", "si es de mayor a tres" (es 13). Te corregiste en "si edad es menor de 17... perdón, mayor".

**Guion:**
> `if` ejecuta un bloque de código solo si la condición es verdadera. Con `edad = 25`, `if (edad > 17)` se cumple y muestra `'Usuario mayor de edad'`. Con `edad = 15` no se muestra nada.
>
> Para manejar más casos uso `else if` y `else`. JavaScript evalúa las condiciones de arriba hacia abajo y ejecuta **solo la primera** que se cumple:
> - `edad > 17` → `'Usuario mayor de edad'`
> - si no, `edad > 13` → `'Usuario necesita estar acompañado de sus padres'`
> - si no se cumple ninguna, `else` → `'No puede ingresar'`
>
> Con `edad = 10` no se cumple ninguna de las dos condiciones y se ejecuta el `else`.

---

## while y loop infinito (`03-while.js`, `04-loop-infinito.js`)

**Qué pasó en el video:** "el wi, la casa de claro", "es como un recorrido que se hace", "la iteración del módulo es igual a C", "nos ayuda a tener un stock", "hasta que la plataforma se scture". El ejemplo imprime números **pares** y no lo dijiste.

**Guion:**
> `while` repite un bloque de código mientras la condición sea verdadera.
>
> Declaro `i = 0` y escribo `while (i < 10)`. Dentro, `if (i % 2 === 0)` revisa si el residuo de dividir `i` entre 2 es 0, es decir, si `i` es par. En ese caso muestra `'Número par'` y el valor. La consola muestra 0, 2, 4, 6 y 8.
>
> La línea `i++` suma 1 a `i` en cada vuelta. Va fuera del `if` para que se ejecute siempre, sea par o no.
>
> Si borro `i++`, `i` vale 0 para siempre, la condición `i < 10` nunca es falsa y el ciclo no termina. Eso es un **loop infinito**: el navegador se congela y hay que cerrar la pestaña.

---

## do while (`05-do-while.js`)

**Qué pasó en el video:** "acá está conectado" no se entiende. La diferencia está bien explicada; falta el ejemplo que la demuestra.

**Guion:**
> `do while` es como `while`, con una diferencia: `while` evalúa la condición **antes** de ejecutar el bloque, y `do while` la evalúa **después**. Por eso `do while` siempre se ejecuta al menos una vez.
>
> Con `i = 2` y la condición `i < 2`:
> - `while` no imprime nada, porque 2 no es menor que 2 y nunca entra al bloque.
> - `do while` ejecuta el bloque una vez, imprime `'Número par 2'`, y después evalúa la condición, que es falsa, y termina.

---

## for (`06-for.js`)

**Qué pasó en el video:** "y el for que es para", "son ya tres elementos los que se evalúan" sin nombrarlos. "la variable del módulo es igual a dos que nos da cero" y "los números partes".

**Guion:**
> `for` junta en una sola línea las tres partes que en un `while` van separadas, divididas por punto y coma:
> 1. **Inicialización:** `let i = 2`, se ejecuta una vez al inicio.
> 2. **Condición:** `i < 10`, se revisa antes de cada vuelta.
> 3. **Incremento:** `i++`, se ejecuta al final de cada vuelta.
>
> Dentro, `if (i % 2 === 0)` muestra los números pares. La consola muestra 2, 4, 6 y 8.

---

## for of (`07-for-of.js`)

**Qué pasó en el video:** "recorrer lo que son un array como tal", "con el off de animales". "¿cómo se llama el momento de mostrar la línea?" (lo dijiste en voz alta mientras buscabas la palabra).

**Guion:**
> `for of` recorre los **elementos** de un array. En `for (let animal of animales)`, en cada vuelta la variable `animal` toma el siguiente valor: `'chanchito feliz'`, `'dragón'` y `'perrito'`.
>
> Antes de `for of`, lo mismo se hacía con un `while`: un contador `i` que empieza en 0, la condición `i < animales.length` y `animales[i]` para leer cada elemento. `for of` hace lo mismo sin manejar el índice.

---

## for in (`08-for-in.js`)

**Qué pasó en el video:** dijiste "es otra manera nueva de JavaScript". `for in` es más antiguo que `for of`. "el portfli de la propiedad del usuario". "lo recorríamos con el pop del índice". No dijiste la diferencia con `for of`.

**Guion:**
> `for in` recorre las **propiedades** de un objeto. En `for (let prop in user)`, `prop` toma cada nombre de propiedad: `'id'`, `'name'` y `'age'`. Para leer el valor uso corchetes: `user[prop]`.
>
> `for in` también funciona con arrays, pero devuelve los **índices** (`'0'`, `'1'`, `'2'`) y no los valores. Por eso con arrays se usa `for of`.
>
> Resumen: `for of` → valores de un array. `for in` → nombres de las propiedades de un objeto.

---

## continue y break (`09-break-continue.js`)

**Qué pasó en el video:** esta lección se mezcló con `switch`. Dijiste "si no le colocamos break se salta", que describe `switch`, no este archivo. No mencionaste `continue`.

**Guion:**
> `continue` y `break` controlan un ciclo desde adentro:
> - `continue` salta el resto de la vuelta actual y pasa a la siguiente.
> - `break` termina el ciclo completo.
>
> En el ejemplo, `i` va de 1 a 6. Cuando `i === 2`, `continue` salta el `console.log`, así que el 2 no se muestra. Cuando `i === 4`, `break` termina el ciclo. La consola muestra solo `1` y `3`.

---

## switch (`10-switch.js`)

**Qué pasó en el video:** "es para colocar diferentes acciones", "igual de la misma manera en el PR, se saltan las instrucciones", "en cambio ya con efectos no se evalúa". No se entiende qué hace `break` en un `switch`.

**Guion:**
> `switch` compara una variable con varios valores posibles. Es una alternativa a una cadena de `if` y `else if` cuando se compara la misma variable.
>
> `switch (accion)` compara `accion` con cada `case`. Si `accion` es `'listar'`, ejecuta el bloque de ese `case`. Si no coincide ningún `case`, ejecuta `default`.
>
> Cada `case` termina con `break`. Sin `break`, después de ejecutar el `case` que coincide, JavaScript sigue ejecutando los `case` de abajo aunque no coincidan. Con `accion = 'listar'` y sin `break`, se mostrarían `'Acción de listar'`, `'Acción de guardar'` y `'Acción no reconocida'`.
>
> Con `accion = 'actualizar'` ningún `case` coincide y se muestra `'Acción no reconocida'`.

---

## Cierre

**Qué pasó en el video:** "Eso sería en cuanto la explicación de la vista."

**Guion:**
> Esos son los fundamentos: tipos de datos, operadores y control de flujo. En el siguiente video resuelvo los ejercicios de esta sección.

---

## Patrones a corregir

| Lo que dijiste | Cuántas veces aprox. | Qué hacer |
|---|---|---|
| "eh" | más de 100 | Hacer una pausa en silencio. |
| "pues", "prácticamente" | más de 50 | Borrar. |
| "este" como relleno ("declaramos este la variable") | más de 40 | Borrar. |
| "acá", "aquí", "esto" | más de 40 | Decir el nombre de la variable, función o archivo. |
| "¿verdad?" | más de 20 | Borrar. |
| "como tal" | 10 | Borrar. |
| Palabras mal pronunciadas: "LED" (`let`), "Snake Cakes", "wi" (`while`), "off" (`of`), "portretos" (corchetes), "Java" (JavaScript) | constante | Practicar los nombres técnicos antes de grabar. |
| Corregirse en voz alta ("perdón", "este...") | más de 10 | Pausar, repetir la frase completa y cortar en la edición. |
