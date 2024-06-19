/*1) Crea una función que reciba un array de objetos, donde cada objeto 
representa a un estudiante con las propiedades nombre y nota. La 
función debe devolver un nuevo array con los nombres de los 
estudiantes que tienen una nota mayor o igual a 7 */


let alumnos = [
    {nombre_apellido: 'Ana Maria Diaz', nota: 7},
    {nombre_apellido: 'Juan Mario Martinez', nota: 5},
    {nombre_apellido: 'Analia Guerrero', nota: 9},
    {nombre_apellido: 'Marina Perez', nota: 4},
    {nombre_apellido: 'Guillermo Valdez', nota: 10}
];

function estudiantes(alumnos) {
    let estudiantesPromocionados = [];
    alumnos.forEach(alumno => {
        if (alumno.nota >= 7) {
            estudiantesPromocionados.push(alumno.nombre_apellido);
        }
    });

    console.log('ALUMNOS PROMOCIONADOS:');
    estudiantesPromocionados.forEach(nombre => {
        console.log(nombre);
    });
}

estudiantes(alumnos);
