function imprimeMensaje(message) {
    console.log(message); //se imprime el mensaje
}
imprimeMensaje("Hola, soy un mensaje"); //se llama a la función y se le pasa el mensaje
function sumar(numero1, numero2) {
    return numero1 + numero2; //se devuelve el resultado
}
var resultado = sumar(5, 10); //se llama a la función y se le pasa los argumentos
console.log("Tu resultado es: ".concat(resultado)); //se imprime el resultado
//salida : Tu resultado es: 15
