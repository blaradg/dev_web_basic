var vp = document.getElementById("villa");
var papel = vp.getContext("2d");
var mapa = "tile.png";
var fondo = {
    name: 'Fondo',
    url: "tile.png",
    cargaOK: false,
};
var vaca = {
    name: 'Vaca',
    url: "vaca.png",
    cargaOK: false,
    qty: 25,
    row_col: 13,
    space: 35
};
var pollo = {
    name: 'Pollo',
    url: "pollo.png",
    cargaOK: false,
    qty: 10,
    row_col: 13,
    space: 35
};
var cerdo = {
    name: 'Cerdo',
    url: "cerdo.png",
    cargaOK: false,
    qty: 15,
    row_col: 13,
    space: 35
};
var persona = {
    name: 'Persona',
    url: "persona.png",
    cargaOK: false,
    qty: 1,
    row_col: 13,
    space: 35
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

persona.imagen = new Image();
persona.imagen.src = persona.url;
persona.imagen.addEventListener("load", cargarPersona);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}
function cargarVaca()
{
    vaca.cargaOK = true;
    dibujar();
}
function cargarPollo()
{
    pollo.cargaOK = true;
    dibujar();
}
function cargarCerdo()
{
    cerdo.cargaOK = true;
    dibujar();
}
function cargarPersona()
{
    persona.cargaOK = true;
    dibujar();
}
function dibujar()
{   
    if(fondo.cargaOK)
    {
        console.log('Entrooo');
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        dibujarAnimal(vaca);
    }
    if(pollo.cargaOK)
    {
        dibujarAnimal(pollo)
    }
    if(cerdo.cargaOK)
    {
        dibujarAnimal(cerdo)
    }
    if(persona.cargaOK)
    {
        dibujarAnimal(persona)
    }
}
function dibujarAnimal(obj)
{
    if(obj.qty > obj.row_col**2)
    {
        alert("Cantidad de " + obj.name + "s ("+obj.qty+") supera el espacio"+obj.row_col**2+".")
    }
    else
    {
        console.log(obj.name+":",obj.qty);
        var list = [];
        var repetir;
        row_col = obj.row_col - 1;
        for(var i=0; i<obj.qty; i++)
        {
            var x;
            var y;
            repetir = true;
            while(repetir)
            {
                x = aleatorio(0, row_col)*obj.space;
                y = aleatorio(0, row_col)*obj.space;
                if(list.includes(x+","+y))
                {
                    repetir = true;
                }
                else
                {
                    list.push(x+","+y)
                    repetir = false;
                }
            }
            papel.drawImage(obj.imagen, x, y);
        }
    }
}

function aleatorio(min, max)
{
    var resultado;

    resultado = Math.floor(Math.random() * (max - min + 1)) + min;

    return resultado;
}