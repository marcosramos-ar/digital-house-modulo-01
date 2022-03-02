const fs = require('fs');

let archivoTareas = {

    archivo: 'tareas.json',

    leerArchivo: function () {

        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
        
    },

    escribirJSON:  function (tareas) {
        let result = JSON.stringify(tareas);
        fs.writeFileSync(this.archivo, result);
    },

    guardarTarea:   function (tarea) {
        let listaDeTareasActual = this.leerArchivo();
        listaDeTareasActual.push(tarea);
        this.escribirJSON(listaDeTareasActual);
    }

}
module.exports = archivoTareas;