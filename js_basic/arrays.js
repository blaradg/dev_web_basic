var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

// Añadir elementos al final del array
var masFrutas = frutas.push("Uvas");
// Eliminar el último elemento del array
var ultimo = frutas.pop();
// Agregar elementos al inicio del array
var nuevaLongitud = frutas.unshift("Peras");
// Eliminar el primer elemento del array
var primero = frutas.shift();

var posicion = frutas.indexOf("Cereza");

console.log(frutas);
// longitud
console.log(frutas.length);
// acceder a los elementos del array
console.log(frutas[4]);

// Elementos principales de un array: Ídice y Elemento

