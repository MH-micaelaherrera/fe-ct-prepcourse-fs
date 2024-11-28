function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
console.log (filtrarNumerosPares)
  let arrayNuevo = []
for ( var i=0; i< array.length ; i++) {
  if (array[i]%2 === 0) {
    arrayNuevo.push(array[i])
  }
}

return arrayNuevo 

}

filtrarNumerosPares ([12,15,33,22,3])
module.exports = filtrarNumerosPares;
