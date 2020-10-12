if (5<2) console.log('hola')
if ('a'==='b') console.log('mundo')
if (true != false) {
    console.log('Rene papu')
}
if ('23'=== 23) {
    console.log('"23" === 23')
} else {
    console.log('"23" no es lo mismo que 23')
    console.log('"23" !== 23')
}
if ('23'== 23) {
    console.log('"23" es igual a 23')
    console.log('"23" == 23')
} else {
    console.log('"23" no es lo mismo que 23')
}
/* En este caso ignora las demas condiciones no importa si son verdad */
if (2<3) {
    console.log('pasó primera condición');
} else if (3>2) {
    console.log('pasó segunda condición');
} else if (10>2) {
    console.log('pasó tercera condición');
} else {
    console.log('no pasó ninguna condición');
}

/* Condiciones multiples es decir
Operadores logicos*/
if (2>3 || 5<6) {
    console.log('pasó primera condición');
    console.log('operador ||');
}
if (3>2 && 10<11) {
    console.log('pasó segunda condición');
    console.log('operador &&');
} else {
    console.log('no pasó segunda condición');
}
/* Condiciones Anidadas */
if (2<3) {
    console.log('Paso condición 1');
    if (5>2) {
        console.log('Paso condición 1.1');
    }
}

/* Aplicacion con el prompt de edad*/
let age = parseInt(prompt('dime tu edad 7u7'),10)
console.log(age);

while (true) {
    if (age !== NaN && age >= 18) {
        console.log('Eres mayor de edad');
        alert('Eres mayor de edad')
        break
    } else if (age !== NaN && age < 18) {
        console.log('Eres un pañal, ¡largo!');
        alert('Eres un pañal, ¡largo!');
        break
    }else{
        age = parseInt(prompt('Ingresa un numero valido ¬¬'),10)
    }
}

/* 
Truthy y Falsy values
    Es decir valorers que no son booleanos pero se comportan como tal
*/
/* Falsy */
/* 
    0
    ""
    NaN
    undefined
    null
*/
/* Truthy */
/* 
    String NO vacío
    Numero diferente de cero 0 (hasta negativos)
    arrays [] no importa si esta vacío o no
    objetos
*/