/* Los objetos se toma como una especie de estructura de datos */
/* la sintaxis es
    {
        propiedad1: valor,
        propiedad2: valor,
        propiedad3: valor,
        ...
        propiedadn: valor,

        metodo1(){
            //codigo del metodo
        }
        metodo2(){
            //codigo del metodo
        }
        ...
        metodo3(){
            //codigo del metodo
        }
    }
*/

let perro = {
    nombre: 'grut',
    edad: 3,
    color: 'abigarrado',
    sexo: 'macho',
    vacunas: true,
    correr(){
        console.log(`${this.nombre} está corriendo`)
    }
}

let user = {
    nombre: 'Jorge',
    edad: 21,
}

/* 
Hay dos formas de acceder a los valores de los objetos
    operador punto .
    con corchetes []
*/
user.nombre
user['nombre']

/* Los objetos tambien pueden recibir expresiones como propiedades */
let a = 'hola', b = 'mundo'
let saludo = {
    [a + b]: 'Mi primer hola mundo' /* {holamundo: "Mi primer hola mundo"} */
}
saludo[a+b]
saludo.holamundo

/* Tambien podemos igualar a variables */
let myObject = {
    a: a, /* a = 'hola' */
    b: b /* b = 'mundo' */
} /* {a: "hola", b: "mundo"} */

/* Otra forma de hacerlo es */
let myObject2 = {a,b} /* {a: "hola", b: "mundo"} */

/* en JS puedes modificar los objetos durante ejecucuion */
/* Se hace mediante los operadores:
    delete ->borra
    objeto.propiedad -> agrega
        (obvio xD)
*/
let perro = {
    nombre: 'grut',
    edad: 3,
    color: 'abigarrado',
    sexo: 'macho',
    vacunas: true,
    correr(){
        console.log(`${this.nombre} está corriendo`)
    }
}

delete perro.edad /* Borra la propiedad 'edad' */
perro.anioNacimiento = 2010 /* Agrega anioNacimiento */
perro.feliz = true /* Agrega feliz */

/* El operador In  */
/* 
devuelve true o false si existe esa propiedad dentro del Objeto
*/
'nombre' in perro /* true */
'peso' in perro /* false */

/* se puede recorrer un objeto con el operador in */
for (const key in perro) {
    if (perro.hasOwnProperty(key)) {
        const element = perro[key];
        c(element)
    }
}

/* Tener cuidado con este ciclo ya que toma tambien en cuenta las propiedades y metodos heredados o mas bien agregados si es que se modifica el prototipo base */

/* Si quieres algo que te devuelva las propiedades integras del objeto está: una modificacion (que realmente viene por defecto en VSC)*/
for (const key in perro) {
    if (perro.hasOwnProperty(key)) {
        console.log(key)
    }
}