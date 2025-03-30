// importar la clase Persona desde el archivo 01-clases2.ts
import { Persona } from "./01-clases2";

// Instanciar la clase Persona 
let persona = new Persona("Santiago", 19, true);

// llamar al método saludar
console.log(persona.saludar());