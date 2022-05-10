// Objetos

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2022,
    detalleDelAuto: function () 
    {
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
};

console.log(miAuto.marca);

//  Funcion Constructora
function auto(marca, modelo, annio)
{
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Modelo AAA", 2021);
var autoNuevo1 = new auto("Tesla", "Modelo SSS", 2021);
var autoNuevo2 = new auto("Renault", "Simbol", 2021);