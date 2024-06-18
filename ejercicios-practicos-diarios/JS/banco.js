/*3) Crear un objeto Banco que contiene el nombre del banco y una lista de clientes (objetos de la
clase Cliente). Se debe crear una función llamada agregarCliente para añadir un cliente a la lista y
otra función llamada mostrarClientes que imprima la información de todos los clientes del banco. */

class Banco {
  constructor(nombreBanco){
      this.nombreBanco = nombreBanco;
      this.listaClientes = [];
  }
  agregarCliente(cliente){
      this.listaClientes.push(cliente)
  }
  mostrarClientes(){
      console.log(`🏦 Lista de clientes del Banco ${this.nombreBanco}`);
      this.listaClientes.forEach(cliente => {
      cliente.informacion()
      console.log('--------------------------------------------')
    });
  }
}

class Cliente {
  constructor(nombreCliente,cuenta,saldo){
    this.nombreCliente = nombreCliente;
    this.cuenta = cuenta;
    this.saldo = saldo;
  }
  informacion(){
    console.log(`Nombre Completo: ${this.nombreCliente}`);
    console.log(`Nro de cuenta: ${this.cuenta}`);
    console.log(`Saldo Disponible: $ ${this.saldo}`);
  }
}
//Creando instancias de la clase Banco:
let macro = new Banco('Macro');
let galicia = new Banco('Galicia');

//Creando instancias de la clase Cliente:
let cliente_uno = new Cliente('Ana maria Díaz',2548789,50000);
let cliente_dos = new Cliente ('Mario Navarro',789464,14000);
let cliente_tres = new Cliente ('Vanina Cacacce',69358747,25000);

//Agregando clientes al banco mediante el metodo agregarCliente:
galicia.agregarCliente(cliente_uno);
galicia.agregarCliente(cliente_dos);
macro.agregarCliente(cliente_tres);

//Mostrar la lista de clientes
galicia.mostrarClientes();
macro.mostrarClientes();




