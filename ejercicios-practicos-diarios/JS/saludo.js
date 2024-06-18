/*1) Saludo: Crear objeto cliente que contiene su nombre y edad. Se debe crear una función
llamada saludarCliente que imprima un mensaje de saludo utilizando la información
proporcionada en el objeto. */

class Cliente {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludarCliente() {
    console.log(
      `✨ Hola ${this.nombre}, eres una instancia de la clase Cliente.✨`
    );
  }
}

let cliente1 = new Cliente("Ana", 36);
console.log(cliente1.saludarCliente());
/*2) Crear un objeto Libro que contiene el título y el autor. Se debe crear una función llamada
mostrarInfo que imprima la información del libro. */
export class Libro {
  constructor(titulo, autor, descripcion) {
    this.titulo = titulo;
    this.autor = autor;
    this.descripcion = descripcion;
  }
  mostrarInfo() {
    console.log(`Titulo: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Descripción: ${this.descripcion}`);
  }
}
