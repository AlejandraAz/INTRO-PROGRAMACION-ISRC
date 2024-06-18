/*2) Crear un objeto Libro que contiene el título y el autor. Se debe crear una función llamada
mostrarInfo que imprima la información del libro. */
class Libro {
  constructor(titulo, autor,descripcion) {
    this.titulo = titulo;
    this.autor = autor;
    this.descripcion = descripcion;
  }
  mostrarInfo() {
    console.log(`Titulo: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Descripcion: ${this.descripcion}`);
  }
}
const articulo = new Libro('Quien se ha llevado mi queso','Spencer Johnson.','Es importante destacar que el libro ilustra la importancia de la actitud mental en el éxito y el fracaso, sugiriendo que la clave para el éxito en la vida es estar preparado para cambios, ser proactivo, tener una mentalidad positiva y enfocarse en lo que se desea');

articulo.mostrarInfo()


