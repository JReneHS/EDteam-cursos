let c = console.log
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

c(Object.keys(perro))
