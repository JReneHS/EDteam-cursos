/* 
SON muy diferentes los parametros y los argumentos
PARAMETROS -> Son VARIABLES LOCALES que se definen EN LA DECLARACION de la FUNCION
ARGUMENTOS -> son los VALORES que se les asigna a las variables de la funcion

se pueden tener parametros con valores por defecto
*/

const saludo = (person = 'Visitante',sexo = 'm') => { /* (person,sexo) son PARAMETROS */
    let saludo = (sexo === 'm') ? 'Bienvenido' : 'Bienvenida'
    return `${saludo} a Casita, ${person}`
}

console.log(saludo('Juan','m')) /* ('Juanito','m') son ARGUMENTOS */
console.log(saludo('Pedro')) /* En este caso se pone el sexo = 'm' por omision */
console.log(saludo()) /* En este caso los dos valores se asignan por omision */

/*
En caso de que haya más argumentos que parametros, se ignoran los sobrantes
En caso de que haya menos argumentos que parametros, se designan como undefined 
    a no ser que tengan un valor por defecto
*/

/* OPERADOR SPREAD (...) */
/* 
Se usa para mandar infinidad de argumentos
*/

const sumarTodo = (...numeros) => {
    console.log(numeros)
    let res = 0
    for (let i = 0; i < numeros.length; i++) {
        res += numeros[i]
    }
    return res
}

let sum = sumarTodo(1,2,3,4,5,6,7,8,9,10)
console.log(sum);