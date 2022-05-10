var pi = 'piedra';
var pa = 'papel';
var ti = 'tijera';

function jugar(a, b) 
{   
    var val = '';

    if (a === b) 
    {
        val = 'Empate';
    }
    else if (a === pi && b === pa)
    {
        val = 'Gana maquina';
    }
    else if (a === pi && b === ti)
    {
        val = 'Gana usuario';
    }
    else if (a === pa && b === pi)
    {
        val = 'Gana usuario';
    }
    else if (a === pi && b === ti)
    {
        val = 'Gana maquina';
    }
    else if (a === ti && b === pi)
    {
        val = 'Gana maquina';
    }
    else if (a === ti && b === pa)
    {
        val = 'Gana usuario';
    }
    else
    {
        val = 'ERROR'
    }
    console.log('Resultado:' + val);
}