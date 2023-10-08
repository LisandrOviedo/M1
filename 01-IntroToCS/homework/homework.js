"use strict";

function BinarioADecimal(num) {
  // necesito saber las posiciones -> de derecha a izquierda
  // base 2 y se eleva a la posición
  // al resultado, multiplicarlo por el numero de la posición
  // por último, sumar todos los resultados de cada numero

  // var numero_binario = num;
  // var str_a_num = (num) => Number(num);
  // var separar_numero = Array.from(String(numero_binario), str_a_num);
  // var reverso = separar_numero.reverse();
  // var sumar_resultados = 0;

  // for (let i = 0; i < reverso.length; i++) {
  //   var calculo = Math.pow(2, i) * reverso[i];
  //   sumar_resultados = sumar_resultados + calculo;
  // }

  // return sumar_resultados;

  return parseInt(num, 2);
}

function DecimalABinario(num) {
  // dividir el numero por 2
  // al resultado, dividirlo nuevamente por 2 hasta llegar a 0
  // me quedo con los restos de las divisiones -> que sean enteros
  // juntar y invertir los restos para obtener el resultado del numero binario

  // var binary = (num % 2).toString();

  // for (; num > 1; ) {
  //   num = parseInt(num / 2);
  //   binary = (num % 2) + binary;
  // }

  // return binary;

  return num.toString(2);
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
