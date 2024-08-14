/* Plan de datos:
Simula el consumo de datos de un plan móvil. Crea una variable
para almacenar el límite de datos y otra para el consumo actual.
Utiliza por ejemplo un ciclo while para ir incrementando el
consumo hasta alcanzar o superar el límite. Cuando se supere el
límite, muestra un mensaje indicando que se ha alcanzado el
límite de datos. */

// Definir el límite de datos y el consumo inicial
const limiteDatos = 100; // Límite de datos en MB
let consumoActual = 0;     // Consumo inicial en MB
const incrementoPorCiclo = 10; // Consumo por ciclo en MB

// Simular el consumo de datos
while (consumoActual <= limiteDatos) {
    // Incrementar el consumo
    consumoActual += incrementoPorCiclo;

    // Mostrar el consumo actual
    console.log(`Consumo actual: ${consumoActual} MB`);

    // Verificar si se ha alcanzado o superado el límite
    if (consumoActual >= limiteDatos) {
        console.log("Has alcanzado el límite de datos.");
        break;
    }
}

console.log("Simulación de consumo de datos finalizada.");
