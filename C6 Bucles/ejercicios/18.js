function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  // var multiplicacion =1
  // multiplicacion = multiplicacion + 1;
  var acum=1
  for(var i=a; i<=b; i++) {
    acum = acum * i 
  }
  if(acum===-0) {
    return 0
  } 
  return Math.abs(acum)
}

module.exports = productoEntreNúmeros;