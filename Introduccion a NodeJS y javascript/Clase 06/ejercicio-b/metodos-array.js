let notas = [10, 4, 5, 8, 9, 2, 7];

let notasHastaEl100 = notas.map(
        function(numero){
            return numero * 10
        }
    );

//console.log(notasHastaEl100);

let notasAprobadas = notas.filter(
    function(numero){
        return numero >= 7;
    }
);

//console.log(notasAprobadas);

let sumaNotas = notas.reduce(
    function(estado, numero){
        return estado + numero;
    }
);

//console.log(sumaNotas);

notas.forEach(function(valor, indice){
    //console.log("En el indice " + indice + " tengo el valor " + valor);
})

let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function(hora){
    return hora + 1;
});


console.log(horariosAtrasados);