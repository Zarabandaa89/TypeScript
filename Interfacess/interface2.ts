//Declarar una interface
interface Direccion {
    calle: string;
    numero: number;
    ciudad?: string; // opcional
}
//Usar la interface
let direccion: Direccion = {
    calle: "Calle Falsa",
    numero: 123,
    ciudad: "Springfield" // opcional
};

console.log(direccion);

//Read only (uso Uno y One ya que las variables sin eso ya estan en uso en otros archivos)
interface PersonaUno {
    readonly nombreOne: string;
    readonly edadOne: number;
    readonly esDesarrolladorOne: boolean;
}

let personaRead: PersonaUno = {
    nombreOne: "Amin",
    edadOne: 39,
    esDesarrolladorOne: true
};

console.log("Persona:", personaRead);

//esto te va a causar un error porque la variable es readonly(no se puede modificar, solo se puede leer)
//personaRead.nombre = "Marce";

//Interfaz extendida
//empleado obtiene todos los atributos de persona
interface Empleado extends PersonaUno {
    readonly puesto: string; //nuevo atributo de empleado
}

let empleadoRead: Empleado = { //empleado
    nombreOne: "Amin", //propiedades de persona
    edadOne: 39, //propiedades de persona
    esDesarrolladorOne: true, //propiedades de persona
    puesto: "Desarrollador Senior" //nueva propiedad de empleado
};

console.log("Empleado:", empleadoRead); //imprimimos el empleado
//salida: Empleado: { nombreOne: 'Amin', edadOne: 39, esDesarrolladorOne: true, puesto: 'Desarrollador Senior' }