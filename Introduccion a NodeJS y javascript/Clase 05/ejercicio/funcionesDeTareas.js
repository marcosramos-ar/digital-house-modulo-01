let fs = require("fs"); // importamos el modulo nativo que sirve para manipular archivos

let tareasJSON = {
    importarParsear: function() {
        let listaTareasJSON = fs.readFileSync("./tareas.json","utf-8");// leemos el archivos y lo guardamos en la variable
        let tareas = JSON.parse(listaTareasJSON); // Parseamos el json y lo convertimos en un array}
        return tareas;
    }
};

module.exports = tareasJSON; // exportamos el modulo para usarlo en app.js