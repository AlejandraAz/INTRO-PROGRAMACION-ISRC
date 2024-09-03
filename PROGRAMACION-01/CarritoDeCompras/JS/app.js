
import { listaDeProductos } from "./listaDeProductos.js";
import { Carrito } from "./clases.js";


const carrito_1 = new Carrito();
const carrito_2 = new Carrito();


window.carrito_1 = carrito_1; 
window.carrito_2 = carrito_2;


carrito_1.agregarProducto(listaDeProductos[0]);
carrito_1.agregarProducto(listaDeProductos[1]);
carrito_1.agregarProducto(listaDeProductos[2]);
carrito_2.agregarProducto(listaDeProductos[3]);
carrito_2.agregarProducto(listaDeProductos[4]);
carrito_2.agregarProducto(listaDeProductos[5]);




// **Funcion para seleccionar producto de las cards
window.seleccionarProducto =(index,carrito)=>{
    const prod_seleccionado = listaDeProductos[index];
    carrito.agregarProducto(prod_seleccionado);
}



// **************  la funcion es creada para mostrar las tarjetas con productos disponibles:
const verTodosLosProductos = (productos)=>{
    const fila = document.getElementById('fila-tarjetas');
    fila.innerHTML = "";
    productos.map((prod,index)=>{
        const columna = document.createElement('div')
        columna.classList='col-12 col-sm-6 col-md-4 my-2 ';
        const tarjetas = `<div class="card h-100" >
        <img src=${prod.img} class="card-img-top" alt="${prod.nombre}">
        <div class="card-body">
        <h5 class="card-title">${prod.nombre} ${prod.marca}</h5>
        <p class="card-text text-warning-emphasis"> <strong>US$ ${prod.precio}</strong></p>
        <div class="d-grid">
        <button  class="btn  fw-bold btn-primary" onclick="seleccionarProducto(${index},carrito_1)">comprar</button></div>
        </div>
        </div>`
        columna.innerHTML = tarjetas;
        fila.append(columna);
        })
    }


verTodosLosProductos(listaDeProductos);





