"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
var clases2_1 = require("./clases2");
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    // Constructor de la clase Empleado que hereda de Persona agregando el puesto
    function Empleado(nombre, edad, esDesarrollador, puesto) {
        // El constructor de la clase padre (Persona) se llama usando super()
        var _this = _super.call(this, nombre, edad, esDesarrollador) || this;
        _this.puesto = puesto;
        return _this;
    }
    // Método saludar que sobrescribe el método de la clase padre
    Empleado.prototype.saludar = function () {
        return "".concat(_super.prototype.saludar.call(this), ", trabajo como ").concat(this.puesto, ".");
    };
    Empleado.prototype.obtenerInfo = function () {
        return "Tengo ".concat(this.obtenerEdad(), " a\u00F1os y trabajo como ").concat(this.puesto, ".");
    };
    return Empleado;
}(clases2_1.Persona));
exports.Empleado = Empleado;
