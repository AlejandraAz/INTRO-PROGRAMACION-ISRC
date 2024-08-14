/* Mensajes de texto: Simula una conversación de mensajes de texto. Crea un arreglo
que contenga objetos, donde cada objeto represente un
mensaje (con propiedades como: remitente, destinatario y
contenido). Utiliza un “iterador” para recorrer el arreglo y
mostrar cada mensaje en pantalla. */

let mensajes = [
    {
        remitente : "Juan",
        destinatario: "Juliana",
        contenido: "Hola!, ¿cómo estas? 😊"
    },
    {
        remitente : "Juliana",
        destinatario: "Juan",
        contenido: "Hola Juan! bien, y vos como estas? que tal tu nuevo emprendimiento? "
    },
    {
        remitente : "Juan",
        destinatario: "Juliana",
        contenido: "Me alegro que estes bien.. Bien estoy pensando en abrir otra sucursal en capital, y habia pensado en ti como supervisora, que te parece la idea???"
    },
    {
        remitente : "Juliana",
        destinatario: "Juan",
        contenido: "Genial!!, no sabes lo feliz que me pones con esa noticia, justo estaba buscando empleo 😊"
    }
];

function verMensajes() {
    mensajes.forEach(msj => {
        console.log(`Remitente: ${msj.remitente} \nDestinatario: ${msj.destinatario} \nMensaje:  ${msj.contenido}`)
    });
}


verMensajes();