let answer = parseInt(prompt('escoge un numero del 1 a 5'),10)
console.log(answer);
switch (answer) {
    case 1:
        alert('Eres timido')
        break
    case 2:
        alert('Eres un empollón')
        break
    case 3:
        alert('Eres un pesado')
        break
    case 4:
        alert('Eres feliz')
        break
    case 5:
        alert('Pudrete')
        break
    default:
        alert('Ingresa por favor un numero valido')
        break
}

/* Encuestas simples*/
let type = prompt(`La capital de Mexico es:
a) Barcelona
b) Washingon
c) CDMX
d) Lima
e) Bogotá
`).toUpperCase().trim()

switch (type) {
    case 'C':
        alert('¡Correcto!')
        break;
    default:
        alert('Respuesta incorrecta')
        break;
}