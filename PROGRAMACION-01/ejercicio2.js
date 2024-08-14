let cel1 = "motorola g30"
let cel2 = "samsung 53"
 let precio1 = 250000;
 let precio2 = 250000;

 function celulares() {
    if(precio1 > precio2){
        alert(`El precio: ${precio1} corresponde al modelo: ${cel1}`)
        console.log(`El precio: ${precio1} corresponde al modelo: ${cel1}`)
    }
    else if(precio2 > precio1){
        console.log(`El precio: ${precio2} corresponde al modelo: ${cel2}`)
    }else{
        console.log(`El precio es el mismo para ambos celulares: ${cel1} y ${cel2}`)
    }
    }
let parrafo = document.getElementById('parrafo');
parrafo.celulares()