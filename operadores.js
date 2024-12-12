
//OPERADORES
const variable = 'valor de la variable' // = Operador de asignación 

const suma = 1 + 3 // + Operador aritmetico de la suma
const resta = 5 - 2 // - Operador aritmetico de la resta
const multiplicación = 5 * 2 // * Operador aritmetico de la multiplicación 
const division = 7 / 3 // / Operador aritmetico de la división 
const resto = 4 % 2 // % Operador aritmetico del resto o módulo de una división
const exponente = 2 ** 3 // ** Operador aritmetico de la potencia o exponente

//INCREMENTO Y DECREMENTO
let x = 5;
let y = 10;

x++; // aumenta en uno
y--; // disminuye en uno



// Operadores Aritméticos
// Se utilizan para realizar operaciones matemáticas.

// +: Suma

// javascript
// Copiar código
// let suma = 5 + 3; // 8
// -: Resta

// javascript
// Copiar código
// let resta = 5 - 3; // 2
// *: Multiplicación

// javascript
// Copiar código
// let multiplicacion = 5 * 3; // 15
// /: División

// javascript
// Copiar código
// let division = 5 / 3; // 1.6667
// %: Módulo (resto de la división)

// javascript
// Copiar código
// let modulo = 5 % 3; // 2
// ++: Incremento (incrementa en 1 el valor de la variable)

// javascript
// Copiar código
// let x = 5;
// x++; // x = 6
// --: Decremento (decrementa en 1 el valor de la variable)

// javascript
// Copiar código
// let x = 5;
// x--; // x = 4
// 2. Operadores de Asignación
// Se usan para asignar valores a las variables.

// =: Asignación simple

// javascript
// Copiar código
// let x = 10;
// +=: Asignación con adición

// javascript
// Copiar código
// let x = 5;
// x += 3; // x = 8
// -=: Asignación con sustracción

// javascript
// Copiar código
// let x = 5;
// x -= 3; // x = 2
// *=: Asignación con multiplicación

// javascript
// Copiar código
// let x = 5;
// x *= 3; // x = 15
// /=: Asignación con división

// javascript
// Copiar código
// let x = 6;
// x /= 3; // x = 2
// %=: Asignación con módulo

// javascript
// Copiar código
// let x = 5;
// x %= 3; // x = 2
// 3. Operadores de Comparación
// Se utilizan para comparar dos valores y devolver un valor booleano (true o false).

// ==: Igualdad (sin verificar el tipo)

// javascript
// Copiar código
// 5 == '5'; // true
// ===: Igualdad estricta (verifica el tipo y el valor)

// javascript
// Copiar código
// 5 === '5'; // false
// !=: Desigualdad (sin verificar el tipo)

// javascript
// Copiar código
// 5 != 3; // true
// !==: Desigualdad estricta (verifica el tipo y el valor)

// javascript
// Copiar código
// 5 !== '5'; // true
// >: Mayor que

// javascript
// Copiar código
// 5 > 3; // true
// <: Menor que

// javascript
// Copiar código
// 5 < 3; // false
// >=: Mayor o igual que

// javascript
// Copiar código
// 5 >= 5; // true
// <=: Menor o igual que

// javascript
// Copiar código
// 3 <= 5; // true
// 4. Operadores Lógicos
// Se utilizan para realizar operaciones lógicas.

// &&: Y lógico (AND)

// javascript
// Copiar código
// true && false; // false
// ||: O lógico (OR)

// javascript
// Copiar código
// true || false; // true
// !: Negación lógica (NOT)

// javascript
// Copiar código
// !true; // false
// 5. Operadores Condicionales (Ternarios)
// El operador ternario es una forma corta de escribir una declaración if-else.

// ? :: Operador ternario
// javascript
// Copiar código
// let edad = 18;
// let resultado = edad >= 18 ? 'Adulto' : 'Menor';
// console.log(resultado); // 'Adulto'
// 6. Operadores de Tipos
// Estos operadores se usan para realizar conversiones de tipo o para verificar el tipo de una variable.

// typeof: Devuelve el tipo de una variable

// javascript
// Copiar código
// let tipo = typeof 5; // 'number'
// instanceof: Verifica si un objeto es una instancia de una clase o constructor

// javascript
// Copiar código
// let x = [1, 2, 3];
// console.log(x instanceof Array); // true
// 7. Operadores de Cadena
// Se utilizan con cadenas de texto.

// +: Concatenación de cadenas

// javascript
// Copiar código
// let saludo = "Hola" + " Mundo"; // 'Hola Mundo'
// +=: Concatenación y asignación

// javascript
// Copiar código
// let saludo = "Hola";
// saludo += " Mundo"; // 'Hola Mundo'
// 8. Operadores de Desestructuración
// Estos operadores permiten extraer valores de arreglos u objetos y asignarlos a variables.

// Desestructuración de objetos:

// javascript
// Copiar código
// let persona = { nombre: 'Juan', edad: 30 };
// let { nombre, edad } = persona;
// console.log(nombre); // 'Juan'
// console.log(edad); // 30
// Desestructuración de arreglos:

// javascript
// Copiar código
// let numeros = [1, 2, 3];
// let [a, b] = numeros;
// console.log(a); // 1
// console.log(b); // 2
// 9. Operadores de Propagación (Spread y Rest)
// Permiten expandir elementos de un arreglo u objeto.

// Spread (...): Descompone un arreglo u objeto en elementos individuales.

// javascript
// Copiar código
// let numeros = [1, 2, 3];
// let masNumeros = [...numeros, 4, 5]; // [1, 2, 3, 4, 5]
// Rest (...): Agrupa varios elementos en un solo arreglo u objeto.

// javascript
// Copiar código
// function sumar(...numeros) {
//   return numeros.reduce((acc, num) => acc + num, 0);
// }
// console.log(sumar(1, 2, 3)); // 6
// 10. Operador Nullish Coalescing (??)
// Devuelve el operando de la derecha si el operando de la izquierda es null o undefined.

// javascript
// Copiar código
// let valor = null;
// let resultado = valor ?? 'Valor por defecto';
// console.log(resultado); // 'Valor por defecto'
// 11. Operador de Encadenamiento Opcional (?.)
// Permite acceder a propiedades de objetos o elementos de arreglos sin causar errores si algún valor es null o undefined.

// javascript
// Copiar código
// let usuario = { nombre: 'Carlos', direccion: { ciudad: 'Madrid' } };
// let ciudad = usuario.direccion?.ciudad; // 'Madrid'
// let pais = usuario.direccion?.pais; // undefined