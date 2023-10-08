# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  // a = 8; b = 9; c = 10
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function (a, b, c) {
    // a = 8; b = 9; c = 10
    b = a;
    console.log(b); // a - 8
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b); // 9
};
c(8, 9, 10);
console.log(b); // 10
console.log(x); // 10 // incorrecto, es 1 porque en la primera linea se cambia a 1
```

```javascript
console.log(bar); // undefined, se define después por lo tanto este console.log no muestra nada
console.log(baz); // undefined, no existe una variable baz
foo();
function foo() {
  console.log("Hola!");
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor); // Franco, porque la condición es true
```

```javascript
var instructor = "Tony";
console.log(instructor); // Tony
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor); // undefined o Tony // Incorrecto, la función si se está ejecutando a pesar de que no tenga nombre
  }
})();
console.log(instructor); // Tony, toma la variable global fuera de la function
```

```javascript
var instructor = "Tony";
let pm = "Franco"; // no se re-declara
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor); // The Flash
  console.log(pm); // Franco, ya que let no se re-declara // Falso, se puede declarar ya que es otro contexto
}
console.log(instructor); // The Flash
console.log(pm); // Franco, toma la variable global fuera de la condición
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // error? not a number
7 / 0 // error, no se puede dividir entre 0
{}[0] // undefined
parseInt("09") // 9
5 && 2 // 2 porque es el ultimo, ya que el primero es verdader
2 && 5 // 5 porque es el ultimo, ya que el primero es verdader
5 || 0 // 5, porque?
0 || 5 // 5, porque?
[3]+[3]-[10] // ??
3>2>1 // 3 mayor que 2, true; (true = 1), true mayor que 1 = false
[] == ![] // arreglo vacio, si es diferente a un arreglo vacio ![]
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
  console.log(a); // undefined, no se ha asignado un valor a la variable A
  console.log(foo()); // 2, la función test ejecuta la función foo y este retorna 2

  var a = 1;
  function foo() {
    return 2;
  }
}
test();
```

Y el de este código? :

```javascript
var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return snack;
}

getFood(false); // getFood espera una variable (callaback) y no se la pasamos, por lo tanto es undefined
// para que funcione debemos pasarle la variable "snack" a la función y quedaría así: getFood(snack);
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname()); // "Aurelio De Rosa" porque agarra el fullname del objeto prop

var test = obj.prop.getFullname;

console.log(test()); // undefined, porque la función test() no está definida, pero la variable test si
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

printing(); // primero el 1, luego el 3, luego el 2, luego el 4 // incorrecto, primero 1 y 4, luego 3 y 2
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
