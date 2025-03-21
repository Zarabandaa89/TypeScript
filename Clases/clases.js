"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
//Clase Persona, usamos export para que la clase sea exportable, en este caso la exportamos a implementacion.ts
var Persona = /** @class */ (function () {
    //Constructor o molde de la clase Persona
    function Persona(nombre, edad, esDesarrollador) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }
    //Metodo saludar
    Persona.prototype.saludar = function () {
        return "Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os.");
    };
    return Persona;
}());
exports.Persona = Persona;
