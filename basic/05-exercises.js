// 1. Crea una variable para cada operación aritmética
let suma = 2 + 3
let resta = 8 - 3
let multiplicacion = 3 * 6
let division = 8 / 2
let modulo = 14 % 4
let potencia = 9 ** 2
console.log(multiplicacion)

// 2. Crea una variable para cada tipo de operación de asignación,
//   que haga uso de las variables utilizadas para las operaciones aritméticas
suma = 6
resta += 6
multiplicacion *= 2
division /= 2
modulo %= 2
potencia **= 2
console.log(potencia)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
let numero = 10
console.log(6 == '6')
console.log(10 === numero )
console.log(6 != numero)
console.log(9 !== numero)
console.log(4 >= 2)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
let numero2 = 23
console.log(23 === '23')
console.log(23 == '24')
console.log(23 != numero2)
console.log( 9 > 10)
console.log(9 >= 17)

// 5. Utiliza el operador lógico and
console.log(8 > 2 && 12 > 10)
console.log(numero == '10' && numero2 == '23')

// 6. Utiliza el operador lógico or
console.log(56 > 98 || 12 > 10)
console.log(numero == '10' || numero == '23')

// 7. Combina ambos operadores lógicos
console.log(56 > 98 || 12 > 10 < numero == '10' && numero2 == '23')

// 8. Añade alguna negación
console.log(!numero)

// 9. Utiliza el operador ternario
let mayorEdad = 14
let resultado = mayorEdad >= 18 ? 'mayor' : 'menor' ;
console.log(resultado)

// 10. Combina operadores aritméticos, de comparáción y lógicas
let numero3 = 23
numero3 += 7
let resultado2 = numero3 === '23' && 6 > 9
console.log(resultado2)
