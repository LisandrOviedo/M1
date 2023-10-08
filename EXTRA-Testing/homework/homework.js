// A continuación se declara un arreglo llamado layout, el cual trata de filas y asientos dentro de un cine.
// Dentro del arreglo existen 5 arreglos (filas) con 4 objetos cada uno (asientos), con las propiedades type y booked.
// La propiedad type especifica el tipo de asiento que es, y la propiedad booked especifica si está disponible o ocupado.

const layout = [
  [
    { type: "VIP", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
  ],
  [
    { type: "NORMAL", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
    { type: "NORMAL", booked: false },
  ],
  [
    { type: "NORMAL", booked: false },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: false },
  ],
  [
    { type: "ECONOMIC", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "ECONOMIC", booked: false },
  ],
  [
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: true },
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: false },
  ],
];

//console.log(layout[0][0].booked); // Obtener si un asiento de una fila está disponible o no.

function getRowNumber(letter) {
  // La función getRowNumber recibe un parámetro tipo string llamado letter.
  // La función debe retornar 0 si la letra enviada es A, y debe retornar 2 si la letra enviada es C.
  return letter.charCodeAt(0) - 65; // La letra A en Unicode es 65, por lo tanto, 65 - 65 = 0. Es decir, letra A = 0.
  // La letra C en Unicode es 67, por lo tanto, 67 - 65 = 2. Es decir, letra A = 2.
}

function getSeat(letter, number) {
  // La función getSeat recibe el parámetro letter y el parámetro number.
  // La función debe permitir buscar el asiento dentro de una fila.
  const numberRow = getRowNumber(letter); // Se hace uso de la función getRowNumber para pasar la letra de la fila a número y se guarda en una variable.
  const layoutRows = layout[numberRow]; // Se guarda en una variable la fila (arreglo) del arreglo padre.
  const seat = layoutRows[number]; // Se guarda en una variable el asiento (objeto) del arreglo previamente guardado.
  return seat; // Retorna el asiento (objeto) previamente guardado.
}

function checkSeatStatus(row, number) {
  // Realizar una función llamada checkSeatStatus, que reciba un parámetro llamado row y otro llamado number.
  // Devolver THROW si el primer parámetro no es un string.
  // Devolver THROW si el segundo parámetro no es un número.
  // Hacer uso de la función getSeat para obtener el asiento (objeto).
  // Retornar true o false dependiendo de la disponibilidad del asiento seleccionado.

  if (typeof row !== "string")
    throw new TypeError("First parameter is not a string");
  if (typeof number !== "number")
    throw new TypeError("Second parameter is not a number");

  const seat = getSeat(row, number);
  return seat.booked;
}

function book(row, number) {
  // Realizar una función que permita la compra de un asiento.
  // Validar si el asiento está disponible o ocupado y retornar un mensaje.
  if (checkSeatStatus(row, number))
    return `Seat in ${row}${number} is already booked`; // Hace uso de la función checkSeatStatus, si la función retorna la propiedad booked del asiento true, retorna un mensaje de ocupado.
  // Si la propiedad booked de ese asiento es false (si está disponible)...
  const seat = getSeat(row, number); // Hace uso de la función getSeat y obtiene el asiento (objeto).
  seat.booked = true; // Asigna booked = true (ocupado), al asiento previamente guardado en la variable anterior.
  return `Seat in ${row}${number} successfully booked`; // Retorna un mensaje de que el asiento ya fue ocupado (comprado).
}

module.exports = {
  checkSeatStatus,
  getRowNumber,
  book,
};
