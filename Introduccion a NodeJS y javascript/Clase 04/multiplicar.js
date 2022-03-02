function multiplicar(a,b) {
    if(a === 0 || b === 0){
        return "Multiplicar por 0 siempre dara 0"
    }
    return a * b
}

module.exports = multiplicar;