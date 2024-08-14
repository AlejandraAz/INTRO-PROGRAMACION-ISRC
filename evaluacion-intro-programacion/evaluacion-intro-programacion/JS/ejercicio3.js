/*3) Crea una clase que represente un libro en una biblioteca. Cada libro 
debe tener las propiedades título, autor y año de 
publicacion. La clase debe tener un método que imprima la 
información del libro en la consola. Además, crea otra clase que 
gestione una colección de libros. La clase biblioteca debe tener un 
método para añadir libros a la colección y otro método para mostrar 
todos los libros en la biblioteca. */

class Libro{
    constructor(titulo,autor,anioPublicacion){
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
    }
    informacion(){
        console.log(`---- DETALLE ARTICULO -----`)
        console.log(`Libro: ${this.titulo}`)
        console.log(`Autor: ${this.autor}`)
        console.log(`Año de publicacion: ${this.anioPublicacion}`)
    }
}

let libro1 = new Libro('El principito','Antoine de Saint-Exupéry', 1943);
libro1.informacion();
let libro2 = new Libro ('¿Quién se ha llevado mi queso?','Spencer Johnson',1998)

class ColeccionLibros{
    constructor(){
        this.coleccion = []
    }
    añadirLibros(libro){
        this.coleccion.push(libro)
    }
    verLibrosDisponibles(){
        console.log(`--------------------------`);
        console.log('*** LIBROS DISPONIBLES ***');
        this.coleccion.forEach(libro => libro.informacion())
        }
    }

    let biblioteca = new ColeccionLibros()
    biblioteca.añadirLibros(libro1);
    biblioteca.añadirLibros(libro2);
    biblioteca.verLibrosDisponibles();