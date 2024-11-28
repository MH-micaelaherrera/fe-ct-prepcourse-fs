function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  console.log(array)
  return array.filter(numero => numero > 10).length;

}
contarElementosMayoresA10([3,520,7,13,2,22])
module.exports = contarElementosMayoresA10;
