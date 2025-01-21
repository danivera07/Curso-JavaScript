
//OPERADORES
const variable = 'valor de la variable' // = Operador de asignación 

const suma = 1 + 3 // + Operador aritmetico de la suma
const resta = 5 - 2 // - Operador aritmetico de la resta
const multiplicación = 5 * 2 // * Operador aritmetico de la multiplicación 
const division = 7 / 3 // / Operador aritmetico de la división 
const resto = 4 % 2 // % Operador aritmetico del resto o módulo de una división
const exponente = 2 ** 3 // ** Operador aritmetico de la potencia o exponente


// OPERADORES ARITMETICOS
// Se utilizan para realizar operaciones matemáticas.
let suma2 = 5 + 3; // 8
let resta2 = 5 - 3; // 2
let multiplicacion2 = 5 * 3; // 15
let division2 = 5 / 3; // 1.6667
let residuo = 5 % 3; // 2

// ++: Incremento (incrementa en 1 el valor de la variable)
let x = 5;
x++; // x = 6

// --: Decremento (decrementa en 1 el valor de la variable)
let y = 5;
y--; // y = 4


// 2. OPERADORES DE ASIGNACIÓN
// Se usan para asignar valores a las variables.

// =: Asignación simple
let asignacion = 10;

// +=: Asignación con adición
let asignacionSuma = 5;
asignacionSuma += 3; // asignacionSuma = 8

// -=: Asignación con sustracción
let asigancionResta = 5;
asigancionResta -= 3; // asigancionResta = 2

// *=: Asignación con multiplicación
let asignacionMulti = 5;
asignacionMulti *= 3; // asignacionMulti = 15

// /=: Asignación con división
let asignacionDivision = 6;
asignacionDivision /= 3; // asignacionDivision = 2

// %=: Asignación con módulo
let asignacionModulo = 5;
asignacionModulo %= 3; // asignacionModulo = 2


// 3. OPERADORES DE COMPARACIÓN
// Se utilizan para comparar dos valores y devolver un valor booleano (true o false).

// ==: Igualdad (sin verificar el tipo)
5 == '5'; // true

// ===: Igualdad estricta (verifica el tipo y el valor)
5 === '5'; // false

// !=: Desigualdad (sin verificar el tipo)
5 != 3; // true

// !==: Desigualdad estricta (verifica el tipo y el valor)
5 !== '5'; // true

// >: Mayor que
5 > 3; // true

// <: Menor que
5 < 3; // false

// >=: Mayor o igual que
5 >= 5; // true

// <=: Menor o igual que
3 <= 5; // true


// 4. OPERADORES LOGICOS
// Se utilizan para realizar operaciones lógicas.

// &&: Y lógico (AND)
true && false; // false

// ||: O lógico (OR)
true || false; // true

// !: Negación lógica (NOT)
!true; // false


// 5. OPERADORES CONDICIONALES (TERNARIOS)
// El operador ternario es una forma corta de escribir una declaración if-else.

// ? :: Operador ternario
let edad = 18;
let resultado = edad >= 18 ? 'Adulto' : 'Menor';
console.log(resultado); // 'Adulto'


// 6. OPERADORES DE TIPO
// Estos operadores se usan para realizar conversiones de tipo o para verificar el tipo de una variable.

// typeof: Devuelve el tipo de una variable
let tipo = typeof 5; // 'number'

// instanceof: Verifica si un objeto es una instancia de una clase o constructor
let n = [1, 2, 3];
console.log(n instanceof Array); // true

// 7. OPERADORES DE CADENA
// Se utilizan con cadenas de texto.

// +: Concatenación de cadenas
let saludo = "Hola" + " Mundo"; // 'Hola Mundo'

// +=: Concatenación y asignación
let saludo2 = "Hola";
saludo2 += " Mundo"; // 'Hola Mundo'


// 8. OPERADORES DE DESESTRUCTURACIÓN
// Estos operadores permiten extraer valores de arreglos u objetos y asignarlos a variables.

// Desestructuración de objetos:
let persona = { nombre: 'Juan', edad: 30 };
let { nombre, edad1 } = persona;
console.log(nombre); // 'Juan'
console.log(edad1); // 30

// Desestructuración de arreglos:
let numeros = [1, 2, 3];
let [a, b] = numeros;
console.log(a); // 1
console.log(b); // 2


// 9. OPERADORES DE PROPAGACIÓN (SPREAD Y REST)
// Permiten expandir elementos de un arreglo u objeto.

// Spread (...): Descompone un arreglo u objeto en elementos individuales.
let numeros1 = [1, 2, 3];
let masNumeros = [...numeros1, 4, 5]; // [1, 2, 3, 4, 5]

// Rest (...): Agrupa varios elementos en un solo arreglo u objeto.
function sumar(...numeros) {
return numeros.reduce((acc, num) => acc + num, 0);
}
console.log(sumar(1, 2, 3)); // 6


// 10. OPERADOR NULLISH COALESCING (??)
// Devuelve el operando de la derecha si el operando de la izquierda es null o undefined.

let valor = null;
resultado = valor ?? 'Valor por defecto';
console.log(resultado); // 'Valor por defecto'


// 11. OPERADOR DE ENCADENAMIENTO OPCIONAL (?.)
// Permite acceder a propiedades de objetos o elementos de arreglos sin causar errores si algún valor es null o undefined.

let usuario = { nombre: 'Carlos', direccion: { ciudad: 'Madrid' } };
let ciudad = usuario.direccion?.ciudad; // 'Madrid'
let pais = usuario.direccion?.pais; // undefined