var imagenes = [];
imagenes['Cauchin'] = 'vaca.png';
imagenes['Pokacho'] = 'pollo.png';
imagenes['Tocinauro'] = 'cerdo.png';
imagenes['Killman'] = 'persona.png';

var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);

var collection = [];

collection.push(cauchin);
collection.push(pokacho);
collection.push(tocinauro);
collection.push(new Pakiman("Killman", 220, 80));

// for in: itera en el indice
for(var pakin in collection)
{
    console.log('for in',pakin);
    // collection[pakin].mostrar();
}
// for of: itera en el objeto
for(var pakin of collection)
{
    console.log('for of',pakin);
    pakin.mostrar();
}

