
// Concatenación 
let myName = "Daniela" 
let saludo = "Hola, mucho gusto, mi nombre es: " + myName + "!"
console.log(saludo)

// Longitud
console.log(saludo.length)

// Acceso a caracteres
console.log(saludo[0])
console.log(saludo[5])

// Metodos comunes
console.log(saludo.toUpperCase()) // Metodo que convierte todo el texto en mayuscula 
console.log(saludo.toLowerCase()) // Metodo que convierte todo el texto en minuscula
console.log(saludo.indexOf("Hola,")) // Metodo que devuelve la posicion incial del elemento 
console.log(saludo.indexOf("mi"))
console.log(saludo.includes('mucho')) // Metodo que verifica si la cadena contiene el elemento y devuelve un valor booleano 
console.log(saludo.includes("cata"))
console.log(saludo.slice(0,5)) // Retorna solo lo que este entre los indices
console.log(saludo.replace("Daniela", "Diego")) // Busca una palabra y si la encuentra la reemplaza 

// Template literals (plantillas literales)
// son cadenas de caracteres que permite usar expresiones inscrustadas
let mensaje = `Hola, mi 
nombre es 
Daniela y estoy aprendiendo 
a programar`
console.log(mensaje)

// Interpolación de datos 
// se usa la sintaxis ${} para ejecutar expresiones dentro de los template literals
console.log(`Mi mensaje es: ${mensaje}`)
