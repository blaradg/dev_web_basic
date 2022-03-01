// Definir una clase
class Pakiman
{
    constructor(name, life, attack)
    {
        this.name = name;
        this.life = life;
        this.attack = attack;
        this.image = new Image();

        this.image.src = imagenes[this.name];
    }
    // Todo bloque de codigo dentro de una clase se entiende como una funcion (no es necesario agregar la palabra "function")
    hablar()
    {
        alert("Yo soy " + this.name);
    }
    mostrar()
    {
        document.body.appendChild(this.image);
        document.write("<p>");
        document.write("<strong>" + this.name + "</strong><br />");
        document.write("Vida: " + this.life + "<br />");
        document.write("Ataque: " + this.attack);
        document.write("</p><hr />");
    }
}