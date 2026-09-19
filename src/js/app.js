function saludar(nombre) {
  return "Hola, " + nombre;
}

function validarCorreo(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}

if (typeof module !== "undefined") {
  module.exports = { saludar, validarCorreo };
}