let funcionesDeTareas = require("./funcionesDeTareas"); //traer la lista de tareas desde "funcionesDeTareas.js"

console.log(funcionesDeTareas.importarParsear()); // probamos que funcione la importacion

let ejecucion = ""; // variable que cambiara segun la ejecucion de "node app.js"

switch(ejecucion){
    case "listar":
    console.log(tareas);
    break;

    case ejecucion !== "listar":
    console.log("Atención - No entiendo qué quieres hacer");
    break;

    case "":
    console.log("Atención - Tenes que pasar una acción");
    break;

    default:
    console.log("Atención - Tenes que pasar una acción");
    break;
}