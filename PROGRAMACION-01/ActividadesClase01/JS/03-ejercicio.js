/* 3. Llamadas:

Crea un programa que simule el registro de llamadas. Utiliza un
arreglo para almacenar objetos que representen cada llamada
(con propiedades como: número marcado, duración y fecha).
Luego, utilizando un ciclo y condicionales, muestra un resumen
de las llamadas, indicando las llamadas de más de 5 minutos.*/

// Arreglo para almacenar las llamadas
const registro_de_llamadas = [
    { numeroMarcado: "555-1234", duracion: 3, fecha: "2024-08-01" },
    { numeroMarcado: "555-5678", duracion: 3700, fecha: "2024-08-02" }, // 1 hora, 1 minuto, 40 segundos
    { numeroMarcado: "555-8765", duracion: 65, fecha: "2024-08-03" },  // 1 minuto, 5 segundos
    { numeroMarcado: "555-4321", duracion: 420, fecha: "2024-08-04" }, // 7 minutos
    { numeroMarcado: "555-9876", duracion: 9000, fecha: "2024-08-05" } // 2 horas, 30 minutos
];

// Mostrar resumen de llamadas
console.log("Resumen de Llamadas:");
registro_de_llamadas.forEach(({ numeroMarcado, duracion, fecha }) => {
    const fechaObjeto = new Date(fecha);
    const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fechaObjeto.toLocaleDateString('es-ES', opcionesFecha);

    // Formatear duración
    const horas = Math.floor(duracion / 3600);
    const minutos = Math.floor((duracion % 3600) / 60);
    const segundos = duracion % 60;

    const partes = [];
    if (horas) partes.push(`${horas} ${horas === 1 ? 'hora' : 'horas'}`);
    if (minutos) partes.push(`${minutos} ${minutos === 1 ? 'minuto' : 'minutos'}`);
    if (segundos) partes.push(`${segundos} ${segundos === 1 ? 'segundo' : 'segundos'}`);

    const duracionFormateada = partes.join(', ');

    console.log(`Número Marcado: ${numeroMarcado} \nDuración: ${duracionFormateada} \nFecha: ${fechaFormateada}`);
    console.log("------------");
});
