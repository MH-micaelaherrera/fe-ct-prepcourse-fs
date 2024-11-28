function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  console.log(array)
  var elementos = [1,5,9,1]
  return array.every(elementos => elementos === array[0]) ;

}
todosIguales ([1,5,9,1])
module.exports = todosIguales;
