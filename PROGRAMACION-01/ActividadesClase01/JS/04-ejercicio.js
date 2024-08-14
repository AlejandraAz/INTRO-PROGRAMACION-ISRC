/*4. Aplicaciones:
Crea un objeto literal que represente una aplicación de tu
teléfono. Este objeto debe tener propiedades como: nombre,
categoría, tamaño y calificación. Puedes utilizar un switch case
para mostrar un mensaje diferente según la categoría de la
aplicación (por ejemplo, "Juego", "Redes sociales", "Utilidad"). */


// Objeto literal que representa una aplicación de teléfono
const aplicacion = {
    nombre: "facebook",
    categoria: "redes sociales",
    tamaño: "250MB",
    calificacion: 4.5
};

// Función para mostrar información sobre la aplicación
function mostrarInformacionAplicacion(app) {
    console.log(`Nombre de la aplicación: ${app.nombre}`);
    console.log(`Categoría: ${app.categoria}`);
    console.log(`Tamaño: ${app.tamaño}`);
    console.log(`Calificación: ${app.calificacion} estrellas`);

    // Usar switch para mostrar un mensaje según la categoría
    switch (app.categoria) {
        case "juego":
            console.log("Esta aplicación es un juego. ¡Prepárate para divertirte!");
            break;
        case "redes sociales":
            console.log("Esta aplicación es una red social. Conéctate con tus amigos.");
            break;
        case "utilidad":
            console.log("Esta aplicación es una utilidad. Te ayudará a ser más productivo.");
            break;
        case "educación":
            console.log("Esta aplicación es educativa. ¡Aprende algo nuevo cada día!");
            break;
        default:
            console.log("Esta aplicación pertenece a otra categoría.");
    }
}

// Llamada a la función para mostrar información de la aplicación
mostrarInformacionAplicacion(aplicacion);
