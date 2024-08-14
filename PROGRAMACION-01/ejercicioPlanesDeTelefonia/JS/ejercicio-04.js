
let btn = document.getElementById('btn');

const planBasico = {
    nombre: 'Básico',
    datos: 5,
    costo: 1500
}

const planEstandar = {
    nombre: 'Estandar',
    datos: 10,
    costo: 3500
}
const planPremium = {
    nombre: 'Premiun',
    datos: 20,
    costo: 4500
}


function recomendarPlan() {
    let presupuesto = parseFloat(prompt('Ingrese su presupuesto disponible'));
    let datos_requeridos = parseInt(prompt('Ingrese la cantidad de datos requeridos'));

    if(presupuesto >= planPremium.costo && datos_requeridos <= planPremium.datos){
        Swal.fire({
            title: 'Plan Recomendado',
            text: `El plan recomendado es: ${planPremium.nombre}`,
            icon: 'success'
        });
        console.log(`El plan recomendado es: ${planPremium.nombre}`)
    }else if(presupuesto >= planEstandar.costo && datos_requeridos <= planEstandar.datos ){
        Swal.fire({
            title: 'Plan Recomendado',
            text: `El plan recomendado es: ${planEstandar.nombre}`,
            icon: 'success'
        });
        console.log(`El plan recomendado es: ${planEstandar.nombre}`)
    }else if(presupuesto >= planBasico.costo && datos_requeridos <= planBasico.datos ){
        Swal.fire({
            title: 'Plan Recomendado',
            text: `El plan recomendado es: ${planBasico.nombre}`,
            icon: 'success'
        });

        console.log(`El plan recomendado es: ${planBasico.nombre}`)
    }else{
        Swal.fire({
            title: 'Sin Plan Disponible',
            text: 'No hay planes disponibles para tu presupuesto',
            icon: 'error'
        });
        console.warn('No hay planes disponibles para tu presupuesto')
    }
}



btn.addEventListener('click',recomendarPlan);
