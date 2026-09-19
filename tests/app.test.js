const test = require("node:test");
const assert = require("node:assert");
const { saludar, validarCorreo } = require("../src/js/app.js");

test("saludar devuelve el saludo con el nombre", () => {
  assert.strictEqual(saludar("Ana"), "Hola, Ana");
});

test("validarCorreo valida correctamente un correo electrónico", () => {
  assert.strictEqual(validarCorreo("test@example.com"), true);
  assert.strictEqual(validarCorreo("correo-invalido"), false);
});