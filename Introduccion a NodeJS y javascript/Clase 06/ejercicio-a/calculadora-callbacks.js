let sumar = (n1,n2) => n1 + n2;
let restar = (n1,n2) => n1 - n2;
let multiplicar = (n1,n2) => n1 * n2;
let dividir = (n1,n2) => n1 / n2;

let calculadora = (n1,n2,operacion) => operacion(n1,n2);

console.log(calculadora(20,4,dividir));