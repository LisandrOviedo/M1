"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length === 1 || array.length === 0) {
    // si el array posee 1 elemento...
    return array;
  }

  if (array.length > 1) {
    // si el array tiene 2 elementos o más
    var pivote = array[0]; // seleccionamos el primer elemento del array como pivote
    var array_pivote = [pivote]; // guardamos el pivote en un nuevo arreglo (central)
    var array_derecha = []; // arreglo para mayores al pivote
    var array_izquierda = []; // arreglo para menores al pivote

    for (let i = 1; i < array.length; i++) {
      if (array[i] >= pivote) {
        array_derecha.push(array[i]);
      }

      if (array[i] < pivote) {
        array_izquierda.push(array[i]);
      }
    }

    return quickSort(array_izquierda).concat(
      array_pivote,
      quickSort(array_derecha)
    );
  }
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //okey probemos ahora
  if (array.length < 2) {
    return array;
  }

  const mitad = Math.floor(array.length / 2); // Mitad del arreglo redondeado abajo
  let primera_mitad = array.slice(0, mitad); // Primera mitad del arreglo
  let segunda_mitad = array.slice(mitad); // Segunda mitad del arreglo

  array = [];

  primera_mitad = mergeSort(primera_mitad);
  segunda_mitad = mergeSort(segunda_mitad);

  while (primera_mitad.length && segunda_mitad.length) {
    if (primera_mitad[0] < segunda_mitad[0]) {
      array.push(primera_mitad.shift());
    } else {
      array.push(segunda_mitad.shift());
    }
  }

  return array.concat(primera_mitad, segunda_mitad);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
