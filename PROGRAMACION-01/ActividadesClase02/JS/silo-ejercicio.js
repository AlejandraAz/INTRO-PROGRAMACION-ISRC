let iniciar_carga = document.getElementById('inicioCarga');

const siloMaiz = {
    nombre: 'silo de maíz',
    capMax: 15000,
    tn_actuales: 1500,
    get stockDisponible() {
        return this.capMax - this.tn_actuales;
    },
};

const siloSoja = {
    nombre: 'silo de soja',
    capMax: 20000,
    tn_actuales: 4200,
    get stockDisponible() {
        return this.capMax - this.tn_actuales;
    },
};

const validar_carga = (cantidad, silo) => {
    if (cantidad > silo.capMax) {
        Swal.fire({
            title: 'Error',
            html: `La cantidad de toneladas ingresadas (${cantidad} toneladas) excede la capacidad máxima del ${silo.nombre}.
        <br>Capacidad máxima: ${silo.capMax} toneladas.
        <br>Stock actual: ${silo.tn_actuales} toneladas.
        <br>Espacio disponible: ${silo.stockDisponible} toneladas.`,
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'Intentar de nuevo',
            cancelButtonText: 'Finalizar operación',
        }).then((result) => {
            if (result.isConfirmed) {
                ingresarCarga(silo); // Permitir al usuario ingresar nuevamente el peso
            } else {
                Swal.fire({
                    title: 'Operación finalizada',
                    text: 'No se realizó ninguna carga.',
                    icon: 'info',
                });
            }
        });
    } else if (cantidad > silo.stockDisponible) {
        Swal.fire({
            title: 'Error',
            text: `La cantidad de toneladas ingresadas (${cantidad} toneladas) es mayor al espacio disponible en el ${silo.nombre}. 
        \nEl espacio disponible es de: ${silo.stockDisponible} toneladas.`,
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'Intentar de nuevo',
            cancelButtonText: 'Finalizar operación',
        }).then((result) => {
            if (result.isConfirmed) {
                ingresarCarga(silo); // Permitir al usuario ingresar nuevamente el peso
            } else {
                Swal.fire({
                    title: 'Operación finalizada',
                    text: 'No se realizó ninguna carga.',
                    icon: 'info',
                });
            }
        });
    } else {
        finaliza_carga(cantidad, silo);
    }
};

const finaliza_carga = (cantidad, silo) => {
    if (cantidad > silo.stockDisponible) {
        validar_carga(cantidad, silo);
    } else {
        silo.tn_actuales += cantidad;
        Swal.fire({
            title: 'Operación realizada con éxito',
            text: `Se han ingresado ${cantidad} toneladas al ${silo.nombre}.\nStock actual: ${silo.tn_actuales} toneladas.\nEspacio disponible: ${silo.stockDisponible} toneladas.`,
            icon: 'success',
        }).then(() => {
            Swal.fire({
                title: '¿Quieres realizar otra carga?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí',
                cancelButtonText: 'No',
            }).then((result) => {
                if (result.isConfirmed) {
                    seleccionarGrano(); // Reiniciar el proceso
                } else {
                    Swal.fire({
                        title: '¡Gracias por utilizar nuestro sistema!',
                        text: 'Esperamos que hayas tenido una excelente experiencia con nuestro simulador de planta de silo.',
                        icon: 'info',
                    });
                }
            });
        });
    }
};

function seleccionarGrano() {
    Swal.fire({
        title: 'Selecciona el tipo de grano',
        input: 'select',
        inputOptions: {
            1: 'Soja',
            2: 'Maíz',
        },
        inputPlaceholder: 'Selecciona un grano',
        showCancelButton: true,
        confirmButtonText: 'Seleccionar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            const tipoCereal = result.value;
            let silo_seleccionado;

            switch (tipoCereal) {
                case '1':
                    silo_seleccionado = siloSoja;
                    break;
                case '2':
                    silo_seleccionado = siloMaiz;
                    break;
                default:
                    Swal.fire({
                        title: 'Error',
                        text: 'Opción no válida, selecciona nuevamente.',
                        icon: 'error',
                    }).then(() => seleccionarGrano());
                    return;
            }

            ingresarCarga(silo_seleccionado); // Pasar al proceso de ingresar carga
        }
    });
}

function ingresarCarga(silo) {
    Swal.fire({
        title: 'Ingresa la cantidad de toneladas a cargar',
        input: 'number',
        inputAttributes: {
            min: 1,
            step: 1,
            placeholder: 'Toneladas',
        },
        showCancelButton: true,
        confirmButtonText: 'Ingresar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            const cantToneladas = parseFloat(result.value);

            if (isNaN(cantToneladas) || cantToneladas <= 0) {
                Swal.fire({
                    title: 'Atención',
                    text: 'Debes ingresar un número positivo válido ⚠️',
                    icon: 'warning',
                    confirmButtonText: 'Intentar de nuevo',
                }).then(() => ingresarCarga(silo)); // Reintentar la carga
            } else {
                finaliza_carga(cantToneladas, silo); // Finalizar la carga si es válida
            }
        }
    });
}

iniciar_carga.addEventListener('click', seleccionarGrano);
