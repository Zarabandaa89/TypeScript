//export para poder importar la clase en otro archivo
export class Persona {
    public nombre: string; // Public: accesible desde cualquier parte
    public edad: number; // Protected: accessible desde la clase y sus subclases
    private esDesarrollador: boolean; // Private: accessible solo desde la clase

    // Constructor para inicializar las propiedades
    constructor(nombre: string, edad: number, esDesarrollador: boolean) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }

    // Método para saludar
    public saludar(): string { // Public method
        this.esDev
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }

    // Método para obtener la edad
    public obtenerEdad(): number { // Protected method
        return this.edad;
    }

    // Método para verificar si es desarrollador
    private esDev(): boolean { // Private method
        return this.esDesarrollador;
    }

}