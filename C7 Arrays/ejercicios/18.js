function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var nota= 0;
  for( var i=0; i<resultadosTest.length; i ++){
    nota += resultadosTest[i];
  }
  return nota / resultadosTest.length;
}
promedioResultadosTest([10,9,3,7,5])
module.exports = promedioResultadosTest;
