let autos = require("./autos");

let concesionaria = {
   autos: autos,

    buscarAuto: function(dominio){
        let result = null;
        let autoBuscado = autos.forEach(
            function (auto){
                if (auto.patente == dominio){
                    result = auto;
                }
            }
        );
        return result;
    },

    venderAuto: function(dominio){
        if(this.buscarAuto(dominio) !== null){
            let result = this.buscarAuto(dominio);
            result.vendido = true;
            return result;
        } else {
            return null;
        }
    },

    autosParaLaVenta: function(){
        return this.autos.filter(function(auto){
            return auto.vendido !== true;
        });
    },

    autosNuevos: function(){
        let listaAutos = this.autosParaLaVenta();
        return listaAutos.filter(function(auto){
            return auto.km < 100;
        });
    },

    listaDeVentas: function(){
        let listaVendidos = this.autos.filter(function(auto){
            return auto.vendido == true;
        });
        let valores = listaVendidos.map(function(valor){
            return valor.precio;
        });

        return valores;
    },

    totalDeVentas: function(){
        let listaVentas = this.listaDeVentas();
        
        return listaVentas.reduce(function(previousValue, currentValue){
            return previousValue + currentValue;
        },0);
    },

    puedeComprar: function(auto,persona){
       return persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas >= auto.precio / auto.cuotas ? true : false;
    },

    autosQuePuedeComprar: function(persona){
        let listaAutos = this.autosParaLaVenta();
        return listaAutos.filter(function(auto){
            let comprobacionCompra = concesionaria.puedeComprar(auto, persona);
            if(comprobacionCompra == true) {
                   return auto;
            };
        });
    }
    
};

console.log(concesionaria.autosQuePuedeComprar());