
const cajaRegistradora = ()=>{
let dinero = parseFloat(prompt('Ingrese el dinero'))
let producto = 500;

if(isNaN(dinero)){
    console.log(`Debes ingresar numeros positivos ⚠️`)
}else if(dinero === producto){
    console.log('Puedes tomar el producto')
}else if(dinero > producto){
    let vuelto = dinero - producto;
    console.log(`Su vuelto es de: ${vuelto}, lleve su producto`)
}else{
    console.log(`El producto cuesta ${producto}, por favor ingresa un billete de mayor denominación`)
}
}
cajaRegistradora();