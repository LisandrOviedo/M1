"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function () {
  if (!this.left && !this.right) return 1;
  if (!this.right) return 1 + this.left.size();
  if (!this.left) return 1 + this.right.size();

  return 1 + this.left.size() + this.right.size();
};

BinarySearchTree.prototype.insert = function () {
  if (value < this.value) {
    if (!this.left) {
      let myTree = new BinarySearchTree(value);
      this.left = myTree;
    } else {
      this.left.insert(value);
    }
  } else {
    if (!this.right) {
      let myTree = new BinarySearchTree(value);
      this.right = myTree;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function () {};
BinarySearchTree.prototype.depthFirstForEach = function () {};
BinarySearchTree.prototype.breadthFirstForEach = function () {};

var arbol = new BinarySearchTree();

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
