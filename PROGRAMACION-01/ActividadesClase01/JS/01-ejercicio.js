/* 1. Contactos: Crea un objeto literal que represente a un contacto de tu
teléfono. Este objeto debe tener las propiedades: nombre,
apellido, número de teléfono y correo electrónico. Luego,
muestra toda la información del contacto en un formato legible. */

let contacto = {
    nombre : "Maria",
    apellido : "Diaz",
    nro : 35845687,
    correo_electronico: "maridiaz@gmail.com",
    tipo: "móvil",
}

function verContacto(contacto) {
    document.write(`----- CONTACTO ----- <hr>`)
    document.write(`Nombre: ${contacto.nombre} <br> Apellido: ${contacto.apellido} <br> Teléfono: ${contacto.nro} <br> Email: ${contacto.correo_electronico} <br> Tipo: ${contacto.tipo}`)
    console.log(`Nombre: ${contacto.nombre} \nApellido: ${contacto.apellido} \nTeléfono: ${contacto.nro} \nEmail: ${contacto.correo_electronico} \nTipo: ${contacto.tipo}`)
}
verContacto(contacto);