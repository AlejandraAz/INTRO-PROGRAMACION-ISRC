/*2) Crea una función que reciba un array de objetos, donde cada objeto 
representa a un estudiante con las propiedades nombre y nota. La 
función debe devolver el promedio de las notas de todos los 
estudiantes.*/

let estudiantes =[
    {nombreYApellido:'Julian Alvarez',nota:8},
    {nombreYApellido:'Jimena Jimenez',nota:7},
    {nombreYApellido:'Mario Navarro',nota:9},
    {nombreYApellido:'Mirta Nuñez',nota:4},
    {nombreYApellido:'Noelia Nuñez',nota:3},
];

function promedioNotas(notas) {
    
    if (notas.length === 0) {
        console.warn('No hay notas registradas'); 
    }

    
    let sumaNotas = notas.reduce((total, estudiante) => {
        return total + estudiante.nota;
    }, 0);

    
    let promedio = sumaNotas / notas.length;

    return promedio;
}

let promedio = promedioNotas(estudiantes);
console.log(`El promedio de las notas es: ${promedio}`);