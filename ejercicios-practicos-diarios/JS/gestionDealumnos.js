/*5) Gestión de Alumnos
Enunciado:
Desarrolle una clase Alumno y una clase GestiónAlumnos que permitan realizar las siguientes
operaciones:
Clase Alumno:
Almacenar la información de un alumno:
Número de matrícula
Nombre del alumno
Apellidos del alumno
Fecha de nacimiento
Notas de las asignaturas (en un array)
Calcular la media de las notas del alumno.
Permitir consultar la información del alumno.
Clase GestiónAlumnos:
Almacenar un conjunto de alumnos.
Agregar nuevos alumnos a la gestión.
Eliminar alumnos de la gestión.
Buscar alumnos por número de matrícula o nombre.
Actualizar las notas de un alumno en una asignatura específica.
Mostrar un listado de todos los alumnos en la gestión.
Mostrar la media general de las notas de todos los alumnos. */

// Clase Alumno
class Alumno {
    constructor(numeroMatricula, nombre, apellidos, fechaNacimiento, notas) {
        this.numeroMatricula = numeroMatricula;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.notas = notas;
    }

    // Método para calcular la media de las notas del alumno
    calcularMedia() {
        const suma = this.notas.reduce((a, b) => a + b, 0);
        return this.notas.length ? suma / this.notas.length : 0;
    }

    // Método para consultar la información del alumno
    consultarInformacion() {
        return {
            numeroMatricula: this.numeroMatricula,
            nombre: this.nombre,
            apellidos: this.apellidos,
            fechaNacimiento: this.fechaNacimiento,
            notas: this.notas,
            media: this.calcularMedia()
        };
    }
}

// Clase GestiónAlumnos
class GestionAlumnos {
    constructor() {
        this.alumnos = [];
    }

    // Método para agregar un nuevo alumno a la gestión
    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    // Método para eliminar un alumno de la gestión por número de matrícula
    eliminarAlumno(numeroMatricula) {
        this.alumnos = this.alumnos.filter(alumno => alumno.numeroMatricula !== numeroMatricula);
    }

    // Método para buscar alumnos por número de matrícula o nombre
    buscarAlumno(criterio) {
        return this.alumnos.filter(alumno =>
            alumno.numeroMatricula === criterio ||
            (typeof criterio === 'string' && alumno.nombre.toLowerCase().includes(criterio.toLowerCase()))
        );
    }

    // Método para actualizar las notas de un alumno en una asignatura específica
    actualizarNotas(numeroMatricula, nuevaNota, indiceAsignatura) {
        const alumno = this.alumnos.find(alumno => alumno.numeroMatricula === numeroMatricula);
        if (alumno && indiceAsignatura >= 0 && indiceAsignatura < alumno.notas.length) {
            alumno.notas[indiceAsignatura] = nuevaNota;
        }
    }

    // Método para mostrar un listado de todos los alumnos en la gestión
    listarAlumnos() {
        return this.alumnos.map(alumno => alumno.consultarInformacion());
    }

    // Método para mostrar la media general de las notas de todos los alumnos
    calcularMediaGeneral() {
        const totalNotas = this.alumnos.reduce((acum, alumno) => acum.concat(alumno.notas), []);
        const sumaTotal = totalNotas.reduce((a, b) => a + b, 0);
        return totalNotas.length ? sumaTotal / totalNotas.length : 0;
    }
}

// Ejemplo de uso:
const alumno1 = new Alumno(1, 'Juan', 'Pérez', '2000-01-01', [8, 9, 7]);
const alumno2 = new Alumno(2, 'María', 'López', '1999-05-12', [6, 7, 8]);

const gestion = new GestionAlumnos();
gestion.agregarAlumno(alumno1);
gestion.agregarAlumno(alumno2);

console.log(gestion.listarAlumnos());
console.log('Media general de notas:', gestion.calcularMediaGeneral());

gestion.actualizarNotas(1, 10, 1); // Actualizar la segunda nota de Juan
console.log(gestion.buscarAlumno(1)); // Buscar a Juan por número de matrícula

gestion.eliminarAlumno(2); // Eliminar a María
console.log(gestion.listarAlumnos());
