const test = require("node:test");
const assert = require("node:assert");
const { saludar } = require("../src/js/app.js");

test("saludar devuelve el saludo con el nombre", () => {
  assert.strictEqual(saludar("Ana"), "Hola, Ana");
});
