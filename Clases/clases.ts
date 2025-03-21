//Clase Persona, usamos export para que la clase sea exportable, en este caso la exportamos a implementacion.ts
export class Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;

    //Constructor o molde de la clase Persona
    constructor(nombre: string, edad: number, esDesarrollador: boolean) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }

    //Metodo saludar
    saludar(): string {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}
