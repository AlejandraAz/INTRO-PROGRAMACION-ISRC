class Mascota {
    constructor(nombre, tipo, edad) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;
    }
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Tipo: ${this.tipo}, Edad: ${this.edad}`);
    }
}
class TiendaDeMascotas {
    constructor() {
        this.mascotas = [];
    }
    añadirMascota(mascota) {
        this.mascotas.push(mascota);
    }
    mostrarMascotas() {
        this.mascotas.forEach(mascota =>
            mascota.mostrarInfo());
    }
}
// Ejemplo de uso
const mascota1 = new Mascota('Max', 'Perro', 2);
const mascota2 = new Mascota('Luna', 'Gato', 1);
const mascota3 = new Mascota('Charlie', 'Hamster', 1);
const miTienda = new TiendaDeMascotas();
miTienda.añadirMascota(mascota1);
miTienda.añadirMascota(mascota2);
miTienda.añadirMascota(mascota3);
miTienda.mostrarMascotas();
