//importando la clase Persona desde el archivo 01-clases2.ts
import { Persona } from "./01-clases2";

// Definición de la clase Empleado que hereda de Persona, usando extends para heredar propiedades y métodos
// La clase Empleado tiene una propiedad adicional llamada puesto
export class Empleado extends Persona {
    public puesto: string;

    // Constructor de la clase Empleado que hereda de Persona agregando el puesto
    constructor(nombre: string, edad: number, esDesarrollador: boolean, puesto: string) {

    // El constructor de la clase padre (Persona) se llama usando super()
        super(nombre, edad, esDesarrollador);
        this.puesto = puesto;
    }

    // Método saludar que sobrescribe el método de la clase padre
    public saludar(): string {
        return `${super.saludar()}, trabajo como ${this.puesto}.`;
    }

    // Método obtenerInfo que devuelve información adicional del empleado
    // Utiliza el método protegido obtenerEdad de la clase padre
    public obtenerInfo(): string {
        return `Tengo ${this.obtenerEdad()} años y trabajo como ${this.puesto}.`;
    }

}
