/* Ciclos basicos */
for (let i = 0; i < 1000; i++) {
    if (i % 7 === 0) {
        console.log(i)
    }
}

for (let i = 0; i < 1000; i++) {
    if((i % 2 === 0) || (i % 7 === 0)) console.log(i)
}
/* 
break rompre el ciclo, sale del ciclo
continue salta lo que sigue del ciclo
*/
for (let i = 0; i < 1000; i++) {
    if((i % 2 === 0) || (i % 7 === 0)) continue
    console.log(i)
}

let i = 0
while (i < 100) {
    console.log(i)
    i++
}

i = 100
while (i--) {
    console.log(i);
}

let password = 'HolaBebe',
    pass
do {
    pass = prompt('Ingresa la contraseña')
} while (pass !== password);