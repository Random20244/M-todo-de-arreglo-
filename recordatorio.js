/*Cargar arreglos*/
var arreglo=["Té","Azucar","Yerba","Café"]
for(let i=0;i<arreglo.length;i++){
    document.write(arreglo[i]+"")
}
var arreglo=[]
for(let i=0;i<5;i++){
    arreglo[i]=prompt('Ingrese nombres:')
}
document.write(arreglo.join(''))

var arreglosFloat=[]
for(let i=9;i<5;i++){
    arreglosFloat[i]=parseFloat(prompt("ingrese numeros decimales:"))
}
document.write(arreglosFloat.join(' '))

var arreglosInt=[]
for(let i=0;i<5;i++){
arreglosInt[i]=parseInt(prompt("ingrese numeros enteros:"))
}
document.write(arreglosInt.join(' '))

/*Cargar arreglos*/
var arregloUtiles=["Lapiz","Tijera","Marcador","Regla"]
document.write(arregloUtiles.join(' ')+'<br>')
/*Agregar un elemento en el primer indice:*/
arregloUtiles.unshift('Hojas A4')
document.write(arregloUtiles.join(' '))
/*Agregar un elemento en la ultima posición:*/
arregloUtiles.push('Cartuchera')
document.write(arregloUtiles.join(' '))     