class Persona{
constructor(nombre,edad){
    this.nombre = nombre
    this.edad = edad
}
saludar(){
    console.log(`✨ Hola ${this.nombre}, eres una instancia de la clase Persona.✨`)
}
}

// Primera instancia, ejecuta el metodo de la clase Persona
let persona = new Persona ('Yanina',25);
persona.saludar()

let persona2 = new Persona ('Pedro',18)
console.log(`Bienvenido ${persona2.nombre} Eres la 💪 segunda instancia de la clase Persona`);

/******OBJETO LITERAL *********/
let objetoPersona = {
    nombre : 'Juliana',
    edad : 47,
    email : 'juli@ana.com'
}

console.log(`Este es un objeto literal: ${objetoPersona.nombre}`)


let cliente = {
    nombre: 'Juan',
    edad: 28
}

function saludarCliente(s) {
    console.log(`Hola soy ${s.nombre} edad: ${s.edad}`)
}
saludarCliente(cliente);

class laGente{
    constructor(nombre,edad){
this.nombre= nombre;
this.edad=edad;
    }
    saludarGente(){
        console.warn(`Estoy saludando a ${this.nombre}❌ ${this.edad}`)
    }
}
let pablo = new laGente('Pablo',25)
console.log(pablo.saludarGente());


