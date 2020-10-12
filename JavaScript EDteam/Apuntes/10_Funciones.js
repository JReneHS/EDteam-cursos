/* 
Que es una funcion?
    es un trozo de codigo reutilizable en el que hay un conjunto de instrucciones
    input -> funcion -> output
    input -> funcion -> output1 -> funcion -> output2 -> funcion -> ...
    input -> argumentos
    output -> valor de retorno
        *Las funciones sin valor de retorno devuelven undefined*
Ejecucucion de una funcion
    nombreDeLaFuncion(argumentos)
    nombreFuncion()
Una funcion puede ser método de un objeto y se le llama "Método"
    objeto.nombreFuncion()
        'Hola Mundo'.slice(3)
Formas para declarar una funcion
    function nombreFuncion(parametros) {
        // Instruciones
        return valor
    }

*/
function handShake(person){
    return `Hola ${person}`
}

let personas = ['juanito','pedro','fabiola','Lolito']

for (let i = 0; i < personas.length; i++) {
    console.log(handShake(personas[i]))
}

/* 
Declaracion con funcion (ya en desuso)
    var nombreFuncion = function() {...}
*/

/* 
Declaracion por funciones de flecha
    const nombreFuncion = (parametros) => {...}
*/
let personasSexo = [['Juanito','m'],['Panchita','f'],['Pedrito','m'],['Julito','m'],['Itzuzita','f'],['Merenguita','f']]

const saludo = (person,sexo) => {
    let saludo = (sexo === 'm') ? 'Bienvenido' : 'Bienvenida'
    return `${saludo} a Casita, ${person}`
}

for (let i = 0; i < personasSexo.length; i++) {
    console.log(saludo(personasSexo[i][0],personasSexo[i][1]))
}

/* 
Si la funcion de flecha retorna directamente un valor, sin instrucciones adicionales
la sintaxis es reducida:
    const nombreFuncion = (parametros) => valor
*/
const sumar = (a,b) => a+b