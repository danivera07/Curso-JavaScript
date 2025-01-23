
// Numeros (number) - tipo de dato con capacidad de 64 bits
let numeroVariable = 10 // valor numerico
let decimalVariable = 10.10 // valor decimal

// Cadenas de texto (string)
let textoVariable = 'texto' //valor string utilizando comillas simples
let texto2 = "texto" //valor string utilizando comillas dobles
let texto3 = `este es el valor de la variable ${numeroVariable}` //valor string concatenado
console.log(texto3)

// Booleanos 
let isMayorEdad = true
let isMenorEdad = false


// Undefined 
let isUndefined // tipo de dato en que la variable es definida pero no inicializada 
console.log(isUndefined)

// Null  
let valueNull = null // tipo de dato en que la variable es definida e indica que no tiene valor

// Symbol
let mySimbol = Symbol("mysimbol") // tipo de datos cuyo valor es unico y se puede usar como un identificador

// BigInt
let isBigInt = BigInt(1298834841541515151515545154515515515151515151) // representa un numero entero grande
let isBigInt2 = 556156515615656156168156155156155115484n


// Mostrar el tipo de dato
console.log(typeof numeroVariable)
console.log(typeof decimalVariable)
console.log(typeof texto2)
console.log(typeof isMayorEdad)
console.log(typeof isUndefined)
console.log(typeof valueNull)
console.log(typeof mySimbol)
console.log(typeof isBigInt)