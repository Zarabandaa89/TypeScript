function saludar(nombre: string, saludo?: string): string { //se declara la función y se le asigna el tipo string para indicar que devuelve un string
    if (saludo) { //se comprueba si se pasa un saludo
        return `${saludo}, ${nombre}!`; //se devuelve el saludo y el nombre
    } else { //si no se pasa un saludo
        return `Hola, ${nombre}!`; //se devuelve un saludo por defecto
    }
}

// Llamadas a la función
console.log(saludar("Santiago")); // Sin saludo
console.log(saludar("Santiago", "Buenos días")); // Con saludo

//Parámetros múltiples
function sumarTodos(...numeros: number[]): number { //se declara la función y se le asigna el tipo number para indicar que devuelve un number
    return numeros.reduce((acumulado, actual) => acumulado + actual, 0);//se devuelve el resultado
}
console.log("Resultado de sumar todos:", sumarTodos(1, 2, 3, 4, 5));//se llama a la función y se le pasa los argumentos
console.log("Resultado de sumar todos:", sumarTodos(1, 2, 3));//se llama a la función y se le pasa los argumentos


//Valores por defecto
function despedir(nombre: string, despedida: string = "Adiós"): string {//se declara la función y se le asigna el tipo string para indicar que devuelve un string
    return `${despedida}, ${nombre}!`;//se devuelve el saludo y el nombre
}

console.log(despedir("Santiago")); //se llama a la función y se le pasa el nombre
console.log(despedir("Santiago", "Hasta luego"));//se llama a la función y se le pasa el nombre