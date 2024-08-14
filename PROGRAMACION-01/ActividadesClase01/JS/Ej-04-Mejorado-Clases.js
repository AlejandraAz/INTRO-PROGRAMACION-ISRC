/*4. Aplicaciones:
Crea un objeto literal que represente una aplicación de tu
teléfono. Este objeto debe tener propiedades como: nombre,
categoría, tamaño y calificación. Puedes utilizar un switch case
para mostrar un mensaje diferente según la categoría de la
aplicación (por ejemplo, "Juego", "Redes sociales", "Utilidad"). */


let nombre = prompt("Ingresa el nombre de la aplicación:");
let categoria = prompt("Ingresa la categoría de la aplicación (Juego, Redes sociales, Utilidad):").toUpperCase();
let tamaño = prompt("Ingresa el tamaño de la aplicación en MB:");
let calificacion = parseInt(prompt("Ingresa la calificación de la aplicación en estrellas (1 a 5):"));



class Aplicacion {
    constructor(nombre, categoria, tamaño, calificacion) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.tamaño = tamaño;
        this.calificacion = calificacion;
    }


    mostrarMensajeCategoria() {
        let mensaje;

        switch (this.categoria) {
            case "JUEGO":
                mensaje = "Esta es una aplicación de juegos. ¡Diviértete jugando!";
                break;
            case "REDES SOCIALES":
                mensaje = "Esta es una aplicación de redes sociales. ¡Conéctate con tus amigos!";
                break;
            case "UTILIDAD":
                mensaje = "Esta es una aplicación de utilidad. ¡Haz tu vida más fácil!";
                break;
            default:
                mensaje = "Esta es una aplicación de otra categoría.";
                break;
        }

        console.log(mensaje);
    }


    mostrarCalificacion() {
        console.log(`Calificación: ${"★".repeat(this.calificacion)}${"☆".repeat(5 - this.calificacion)} (${this.calificacion} estrellas)`);
    }
}




const miAplicacion = new Aplicacion(nombre, categoria, tamaño, calificacion);


miAplicacion.mostrarMensajeCategoria();

miAplicacion.mostrarCalificacion();
