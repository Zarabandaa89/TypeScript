function imprimeMensaje(message: string): void { //se declara la función y se le asigna el tipo void para indicar que no devuelve nada
    console.log(message); //se imprime el mensaje
}

imprimeMensaje("Hola, soy un mensaje"); //se llama a la función y se le pasa el mensaje

function sumar(numero1: number, numero2: number): number { //se declara la función y se le asigna el tipo number
    return numero1 + numero2; //se devuelve el resultado
}

let resultado: number = sumar(5, 10); //se llama a la función y se le pasa los argumentos

console.log(`Tu resultado es: ${resultado}`);//se imprime el resultado
//salida : Tu resultado es: 15