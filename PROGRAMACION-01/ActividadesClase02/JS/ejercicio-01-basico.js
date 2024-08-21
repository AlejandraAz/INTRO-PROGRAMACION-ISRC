const calcularNros = (num1,num2,) =>{

    let num_1 = parseFloat(prompt('Ingrese un numero'));
    let num_2 = parseFloat(prompt('Ingrese un numero'));
    let operador = prompt('Ingrese la opcion que contiene la operacion que desea realizar \n1) SUMA \n2) RESTA \n3) MULTIPLICAR \n4) DIVIDIR');
    let total;

    if(isNaN(num_1,num_2,operador)){
        console.log('Debes ingresar numeros positivos')
    }else{
    switch (operador) {
        case '1':
            total = num_1 + num_2;
            alert(`El total de la suma es: ${total}`);
            break;
            case '2':
                total = (num_1 === 0 || num_2 === 0) ? 'No se puede realizar esta operacion' : num_1 - num_2;
            console.log(`${total}`)
                break;
                case '3':
                    total = num_1 * num_2;
                    alert(`El total de la multiplicación: ${total}`)
                break;
                case '4':
                    total = (num_1 === 0 || num_2 === 0) ? 'No se puede realizar esta operacion' : num_1 / num_2;
                    console.log(`${total}`)
                break;
        default:
            alert('❌⚠️ Error ❌⚠️')
            console.warn('❌⚠️ Error ❌⚠️')
            break;
    }
}
}

// calcularNros()

