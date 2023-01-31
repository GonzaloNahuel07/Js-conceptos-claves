/*
Interpolación template string
-> las plantillas literales son cadenas literales que habilitan el uso de expresiones incrustadas. Con ellas, es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres.
.
.
-> Templates String:
Las plantillas de cadena de caracteres pueden contener marcadores, identificados por el signo de dólar y envueltos en llaves ${expresión}. Las expresiones contenidas en los marcadores, junto con el texto entre ellas, son enviados como argumentos a una función.

MOZILLA --> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals

Ejemplo:

*/

let nombreUsuario = "Gonzalo";
console.log("\nBienvenido: \n " + nombreUsuario + "\n");

/*
Con las plantillas literales, se pueden utilizar sus nuevas capacidades para simplificar la sintaxis:
*/
console.log(`
Bienvenido:
${nombreUsuario}
`);
/*
Métodos:
*/
console.log(`Bienvenido: ${nombreUsuario.toUpperCase()}`)
/*
Operador ternario:
*/
// let estado = false

console.log(`
${estado ? 'Bienvenido!' : 'Adiós!'} ${nombreUsuario}
`);

/*
var vs let vs const
-> Uno de los mayores problemas al declarar variables con var, es que puede sobrescribir las declaraciones de variables sin errores.
*/
var estado = true;
var estado = false;
console.log(estado);

/*
Debido a que este comportamiento no arroja un error, la búsqueda y corrección de errores se vuelve más difícil. Se introdujo let una nueva palabra clave llamada en ES6 para resolver este problema potencial con var.
.
.
-> let: Una variable con el mismo nombre solo se puede declarar una vez.
*/
let estado = true;
let estado = false;
console.log(estado);
/*
Pero si se puede cambiar su valor:
*/
let estado = true;
estado = false;
console.log(estado);

/*
Scope
-> Siguiendo con el tema de las variables en Javascript, conozcamos el scope. En simples palabras el "scope de una variable" hace referencia al lugar donde esta va a vivir o podrá ser accesible.

Cuando declaras una variable con var, se declara globalmente o localmente si se declara dentro de una función.
*/
var estado = true
if (estado) {
    var estado = false
}
console.log(estado)

// let se comporta de manera similar, pero con algunas características adicionales. Cuando declaras una variable con let dentro de un bloque, declaración o expresión, su alcance se limita a ese bloque, declaración o expresión.
let estado = true
if (estado) {
    let estado = false
    console.log(estado)
}
console.log(estado)

/*
const
-> const tiene todas las características increíbles de let, con la ventaja adicional de que las variables declaradas usando const son de solo lectura. Son un valor constante, lo que significa que una vez que se asigna una variable const, no se puede reasignar.

Error:

const estado = true
estado = false


Error:

for (const i = 0; i < 10; i++) {
console.log(i)


const estado = true
if (estado) {
const estado = false
console.log(estado)
}
console.log(estado)
}


TIP

Algunos desarrolladores prefieren asignar todas sus variables usando const de forma predeterminada (me incluyo), a menos que sepan que necesitarán reasignar el valor. Solo en ese caso, usan let

.
.
.

Array vs const
-> Es importante comprender que los objetos (incluidos los arreglos y las funciones) asignados a una variable mediante el uso const siguen siendo mutables. El uso de const solo evita la reasignación del identificador de variable
*/
//Error:
const miArray = [];
miArray = ["nuevoElemento"];

//Válido:
miArray[0] = "nuevoElemento"
console.log(miArray);

/*
Array (push, pop, shift, unshift)
-> El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
*/
const frutas = ["Banana"]
frutas.push("Sandía")
console.log(frutas)

/*
El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
*/
const frutas2 = ["Banana"]
frutas.unshift("Sandía")
console.log(frutas)

/*
El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
*/
const frutas3 = ["manzana", "pera"];

frutas.unshift("uva");

const frutaEliminada3 = frutas.pop();

console.log(frutas);
console.log(frutaEliminada);

/*
El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
*/
const frutas4 = ["manzana", "pera"];

frutas.unshift("uva");

const frutaEliminada4 = frutas.shift();

console.log(frutas4);
console.log(frutaEliminada4);

/*
Funciones anónimas
-> en js usualmente no necesitamos nombrear a mis funciones, especialmente cuando se pasa una función como argumento a otra función. En su lugar, creamos funciones inline. No necesitamos nombrear estas funciones porque no las reutilizamos en otro lugar.

*/
/*
Función declarativa: 

declaro la función
*/
function numAleatorioRango (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//Incovo la función
console.log(numAleatorioRango(1, 11));

/*
Funcion expresada:

Anínima (expresada en una variable)
*/
const miNumero = function (min, max) {
    return Mathfloor(Math.random() * (max - min) + min);
}

console.log(miNumero(1, 11));

/*
Diferencia declarativa vs expresada: 
*/
console.log(miNumero (1, 11));
const miNumero2 = function (min, max){
    return Math.floor(Math.random() * (min, max) + min);
}

/*
TIP:
-> La forma correcta de definir una función varía según el comportamiento que esperemos de la misma: con las funciones declaradas, tenemos la seguridad de que siempre estarán disponibles en tiempo de ejecución. Con las funciones expresadas, tendremos que éstas no son evaluadas hasta que el intérprete no alcance su posición en el código, lo cual puede generar errores en arquitecturas muy anidadas.

El hecho de que las funciones declarativas se evalúen antes que las expresiones, pueden producir comportamientos no deseados cuando forman parte de condicionales. Para estos casos, el uso de las funciones expresadas garantiza que éstas formarán parte del flujo general del programa, lo cual puede evitarnos sorpresa en determinados entornos.

FUENTE --> https://www.etnassoft.com/2011/09/02/funciones-declaradas-vs-funciones-expresadas-en-javascript/

*/

/*
Arrow functions
-> es una alternativa compacta a una expresión de función tradicional

MOZILLA --> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions

const miNumeroFlecha = (max) => {
    return Math.floor(Math.random() * (max - 1)) + 1;
}

console.log(miNumeroFlecha(11))

*/
//Reducción
const miNumeroFlecha = max => Math.floor(Math.random() * (max - 1)) + 1;
        
console.log(miNumeroFlecha(11))

//Reducción con paréntesis
const miNumeroFelcha2 = max => (Math.floor(Math.random() * (max - min) + min));

console.log(miNumeroFlecha2);

// Más parámetros
const miNumefelcha3 = (min, max) => Math.floor(Math.random() * (max - min) + min);

//Parámetros opcionales (también se puede hacer con function)
const miNumeroFlecha4 = (min = 1, max = 10) => Mayh.floow(Math.random(min - max) - min);

/*
Limitantes: 
-> No tiene sus propios enlaces a this o super y no se debe usar como métodos.
-> No tiene argumentos o palabras clave new.target.
-> No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
-> No se puede utilizar como constructor
*/

/*
Arrow & forEach()
-> el método forEach() ejecuta la función indicada una vez por cada elemento array.
*/
let frutas5 = ["manzana", "sandía", "pera"];
frutas.forEach(frutas => console.log(fruta));

let frutas6 = ["manzana", "sandía", "pera"]
frutas.forEach((fruta, index, array) => {
    console.log(index)
    console.log(fruta)
    console.log(array)
})