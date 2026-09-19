function saludar(nombre) {
  return "Hola, " + nombre;
}

if (typeof module !== "undefined") {
  module.exports = { saludar };
}
