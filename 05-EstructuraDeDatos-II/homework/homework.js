"use strict";

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
  this._length = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  let nuevoNodo = new Node(value);
  let posicion_actual = this.head;

  if (posicion_actual === null) {
    this.head = nuevoNodo;
    this._length++;
    return value;
  }
  //
  while (posicion_actual.next !== null) {
    posicion_actual = posicion_actual.next;
  }
  //
  posicion_actual.next = nuevoNodo;
  this._length++;
  return value;
};

LinkedList.prototype.remove = function () {
  let posicion_actual = this.head;

  if (posicion_actual === null) {
    return null;
  }

  if (posicion_actual.next === null) {
    this.head = null;
    this._length--;
    return posicion_actual.value;
  } else {
    while (posicion_actual.next.next !== null) {
      posicion_actual = posicion_actual.next;
    }
    let ultimo_valor = posicion_actual.next.value;
    posicion_actual.next = null;
    this._length--;
    return ultimo_valor;
  }
};

LinkedList.prototype.search = function (dato) {
  let posicion_actual = this.head;

  while (posicion_actual !== null) {
    if (typeof dato !== "function") {
      if (dato === posicion_actual.value) {
        return posicion_actual.value;
      }
    } else {
      if (dato(posicion_actual.value)) {
        return posicion_actual.value;
      }
    }
    posicion_actual = posicion_actual.next;
  }
  return null;
};

// var lista = new LinkedList();
// console.log(lista);
// lista.add(1);
// lista.add(12);
// console.log(lista);

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.buckets = [];
  this.numBuckets = 35;
}

HashTable.prototype.hash = function (string) {
  // Convertir string y calcular posición donde se almacenará el objeto
  let suma = 0;
  for (let i = 0; i < string.length; i++) {
    suma += string.charCodeAt(i);
  }
  return suma % this.numBuckets;
};

HashTable.prototype.set = function (key, value) {
  if (typeof key != "string") throw TypeError("Keys must be strings");

  let posicion = this.hash(key);

  if (!this.buckets[posicion]) {
    this.buckets[posicion] = {};
  }

  this.buckets[posicion][key] = value;
};

HashTable.prototype.get = function (key) {
  let posicion = this.hash(key);
  return this.buckets[posicion][key];
};

HashTable.prototype.hasKey = function (key) {
  let posicion = this.hash(key);
  return this.buckets[posicion].hasOwnProperty(key);
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
