const dolarOficial = {
    nombre: "Oficial",
    compraVenta: 958.50,
    comprar(num) {
        let total = num * this.compraVenta;
        Swal.fire(`Usted debe pagar $${total.toFixed(2)} para comprar ${num} U$D`);
    },
    vender(num) {
        let total = num * this.compraVenta;
        Swal.fire(`Usted debe recibir $${total.toFixed(2)} por vender ${num} U$D 💵💸`);
    }
};

const dolarBlue = {
    nombre: "Blue",
    compra: 1340,
    venta: 1360,
    comprar(num) {
        let total = num * this.compra;
        Swal.fire(`Usted debe pagar $${total.toFixed(2)} para comprar ${num} U$D`);
    },
    vender(num) {
        let total = num * this.venta;
        Swal.fire(`Usted debe recibir $${total.toFixed(2)} por vender ${num} U$D 💵💸`);
    }
};

const dolarMep = {
    nombre: "MEP",
    compra: 1270.51,
    venta: 1270.28,
    comprar(num) {
        let total = num * this.compra;
        Swal.fire(`Usted debe pagar $${total.toFixed(2)} para comprar ${num} U$D`);
    },
    vender(num) {
        let total = num * this.venta;
        Swal.fire(`Usted debe recibir $${total.toFixed(2)} por vender ${num} U$D 💵💸`);
    }
};

function operar() {
    let tipoDolar;
    let operacion;
    let monto;

    function seleccionarOperacion() {
        return Swal.fire({
            title: 'Seleccione la operación',
            input: 'select',
            inputOptions: {
                1: 'Comprar',
                2: 'Vender'
            },
            inputPlaceholder: 'Seleccione una opción',
            showCancelButton: true,
            inputValidator: value => {
                if (!value) {
                    return 'Debes seleccionar una opción';
                }
                return null;
            }
        }).then(result => {
            if (result.isConfirmed) {
                return result.value;
            }
            return null;
        });
    }

    function seleccionarTipoDolar() {
        return Swal.fire({
            title: 'Seleccione el tipo de dólar',
            input: 'select',
            inputOptions: {
                1: 'Oficial',
                2: 'MEP',
                3: 'Blue'
            },
            inputPlaceholder: 'Seleccione una opción',
            showCancelButton: true,
            inputValidator: value => {
                if (!value) {
                    return 'Debes seleccionar una opción';
                }
                return null;
            }
        }).then(result => {
            if (result.isConfirmed) {
                return result.value;
            }
            return null;
        });
    }

    function ingresarMonto() {
        return Swal.fire({
            title: 'Ingrese el monto en dólares',
            input: 'number',
            inputPlaceholder: 'Monto en USD',
            showCancelButton: true,
            inputValidator: value => {
                if (!value || value <= 0) {
                    return 'Debes ingresar un número positivo';
                }
                return null;
            }
        }).then(result => {
            if (result.isConfirmed) {
                return parseFloat(result.value);
            }
            return null;
        });
    }

    seleccionarTipoDolar().then(result => {
        if (result !== null) {
            tipoDolar = parseInt(result);
            seleccionarOperacion().then(result => {
                if (result !== null) {
                    operacion = parseInt(result);
                    ingresarMonto().then(result => {
                        if (result !== null) {
                            monto = result;

                            switch (tipoDolar) {
                                case 1:
                                    operacion === 1 ? dolarOficial.comprar(monto) : dolarOficial.vender(monto);
                                    break;
                                case 2:
                                    operacion === 1 ? dolarMep.comprar(monto) : dolarMep.vender(monto);
                                    break;
                                case 3:
                                    operacion === 1 ? dolarBlue.comprar(monto) : dolarBlue.vender(monto);
                                    break;
                                default:
                                    Swal.fire('Error', 'Operación no válida', 'error');
                                    break;
                            }
                        }
                    });
                }
            });
        }
    });
}


operar();