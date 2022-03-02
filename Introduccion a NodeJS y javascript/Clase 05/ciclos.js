function noParesDeContarImparesHasta(numero){
    let numerosImpares = 0;
    for(let i = 0;i <= numero;i++){
        if(numero % 2 != 0){
            numerosImpares = numerosImpares + 1;
            console.log("llego")
        }
    }
    return numerosImpares;
}

console.log(noParesDeContarImparesHasta(4)) 