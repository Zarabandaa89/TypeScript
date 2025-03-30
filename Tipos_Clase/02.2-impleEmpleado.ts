// importar la clase Empleado desde el archivo 02-empleado.ts
import { Empleado } from "./02-empleado";

// Instanciar la clase Empleado
// La clase Empleado hereda de Persona, por lo que se pueden usar los métodos y propiedades de Persona
let empleado = new Empleado("Santiago", 19, true, "Desarrollador Junior");

// llamar al método saludar
console.log(empleado.saludar());
// llamar al método obtenerInfo
console.log(empleado.obtenerInfo());
// llamar a la propiedad nombre
console.log("Nombre:", empleado.nombre);