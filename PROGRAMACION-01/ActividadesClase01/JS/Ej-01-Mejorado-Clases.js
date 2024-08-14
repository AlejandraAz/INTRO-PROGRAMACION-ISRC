
class Agenda{
    constructor(contactos){
        this.contactos = [];
    }
    añadirContacto(contacto){
    this.contactos.push(contacto)
    Swal.fire({
        title: 'Nuevo contacto',
        text: `${contacto.nombre} ${contacto.apellido} se agregó correctamente`,
        icon: 'success'
    });
    
    }

    eliminarContacto(index) {
        let validar = confirm(`⚠️⚠️ Desea eliminar: ${this.contactos[index].nombre.toUpperCase()} ${this.contactos[index].apellido.toUpperCase()} de la lista? ⚠️⚠️`);
        if (validar) {
            this.contactos.splice(index, 1);
            Swal.fire({
                title: 'Contacto eliminado',
                text: `El contacto se eliminó correctamente`,
                icon: 'success'
            });
        }
    }

    mostrarContactos(){
        document.write(`----- CONTACTOS -----`)
        document.write(`<hr>`)
    this.contactos.forEach(contacto =>{
    document.write(`<br>${contacto.id} Nombre: ${contacto.nombre.toUpperCase()} <br>Apellido: ${contacto.apellido.toUpperCase()} <br>`)
})
}
}

class Contacto{
    constructor(id,nombre,apellido,nro,correo_electronico,tipo){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nro = nro;
        this.correo_electronico = correo_electronico;
        this.tipo = tipo;
    }
}

//Creo la instancia de la agenda:
const agenda = new Agenda ();


//Creo las instancias de clase Contactos 
const contacto_uno = new Contacto(1,'José','Díaz','266-871554','jose@gmail.com','móvil');
const contacto_dos = new Contacto(2,'Nelsón','Castro','011-871478','castro@gmail.com','móvil');
const contacto_tres = new Contacto(3,'Ana','Perez','2664-8714142','anaPerez@gmail.com','fijo');
// const contacto_cuatro = new Contacto(4,'Mafalda','Viale','351-8714487','mafi@gmail.com','movil');


agenda.añadirContacto(contacto_uno );
agenda.añadirContacto(contacto_dos );
agenda.añadirContacto(contacto_tres );
// agenda.añadirContacto(contacto_cuatro );
agenda.eliminarContacto(0);
agenda.mostrarContactos();


