"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var arreglo = [1];
  for (let i = 2; i <= num; i++) {
    while (num % i == 0) {
      arreglo.push(i);
      num = num / i;
    }
  }

  return arreglo;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //
  // Compara 2 numeros y el mayor lo cambia de lugar a ultimo i y i+1
  // El ultimo no lo vuelve a comparar
  // Ej: 0-1, 1-2, 2-3, 3-4
  var aux;

  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        aux = array[j];
        array[j] = array[j - 1];
        array[j - 1] = aux;
      }
    }
  }

  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let aux = array[i];

    while (j >= 0 && aux < array[j]) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = aux;
  }

  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    var minimo = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minimo]) {
        minimo = j;
      }
    }

    if (minimo !== i) {
      [array[i], array[minimo]] = [array[minimo], array[i]];
    }
  }

  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
