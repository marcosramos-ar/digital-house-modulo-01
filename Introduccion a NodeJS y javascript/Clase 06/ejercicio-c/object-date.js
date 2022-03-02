let actualDate = new Date();

let year = actualDate.getFullYear();
let month = actualDate.getMonth();
let day = actualDate.getDay();

let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log("Hoy es " + day + " de " + (month = months[month]) + " del " + year);