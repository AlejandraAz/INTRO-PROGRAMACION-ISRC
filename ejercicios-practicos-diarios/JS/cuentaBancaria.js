/*4) Cuenta Bancaria
Enunciado:
Desarrolle una clase CuentaBancaria que permita realizar las siguientes operaciones:
Apertura de cuenta:
La apertura de la cuenta debe requerir el nombre del titular y el saldo inicial.
El saldo inicial debe ser un valor positivo.
Consulta de saldo:
Debe permitir consultar el saldo actual de la cuenta.
Depósito:
Debe permitir realizar depósitos en la cuenta.
El monto del depósito debe ser un valor positivo.
Retiro:
Debe permitir realizar retiros de la cuenta.
El monto del retiro no debe superar el saldo disponible.
Se debe mostrar un mensaje en caso de que el retiro sea superior al saldo disponible.
Restricciones:
No se deben permitir retiros que dejen la cuenta con saldo negativo.
Se debe registrar el historial de transacciones (depósitos y retiros) en un array. */


class CuentaBancaria{
    constructor(nombre,saldoInicial){
        this.nombre = nombre;
        this.saldoInicial = saldoInicial;

        if(saldoInicial <= 0 || isNaN(saldoInicial)){
            console.warn('❌ Debes ingresar un nro positivo ❌')
        }

    }
    consultarSaldo(){
        if(this.saldoInicial <= 0 || isNaN(this.saldoInicial)){
            console.warn('❌ Debes ingresar un nro positivo ❌')
        }else{
            console.log(`Su saldo actual es: $ ${this.saldoInicial}`);
        }
    }
    
    Depositar(monto){
    if(monto <= 0 || isNaN(monto)){
        console.warn('❌ Debes ingresar un nro positivo ❌')
    }else{
        this.saldoInicial += monto
        console.log(`Saldo actualizado: $ ${this.saldoInicial}`)
    }
    }

    retiros(monto){
        if(monto <= 0 || monto > this.saldoInicial || isNaN(monto)){
            console.warn(`SALDO INSUFICIENTE, tu saldo actual es de: $${this.saldoInicial}`)
        }else{
            this.saldoInicial-= monto;
            console.log(`OPERACION EXITOSA, tu saldo actual es de: $${this.saldoInicial}`)
        }
    }

}



let user = new CuentaBancaria('Yanina',2500)
user.consultarSaldo();
user.Depositar(2500);
user.retiros(1500);
