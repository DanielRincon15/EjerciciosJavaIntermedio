//Arrays
// Estructura de Datos
// Cuando tengo mas de un solo valor utilizo arrays 
// El arrays vacio 

let personas = [];


let animales = ["Perro","Gato","Serpiente","Lobo","Escorpion","Conejo"];

// Posiciones = Perro - 0, Gato - 1, Serpeinte - 2, Lobo - 3, Escorpion - 4, Conejo - 5
// Item = Perro - 1, Gato - 2, Serpeinte - 3, Lobo - 4, Escorpion - 5, Conejo - 6

//lenght es la cantidad exacta de items que hay en el array

// console.log(animales.length); 
// console.log(animales);

// El for nos permite sacar todos los items de la lista y guardarlos 

// for(let i = 0; i < animales.length; i++){
//     console.log(anmiales[i]);
// }

//Agrega un nuevo elemento

// animales[6] = "Dragones";

//Reemplaza el valor

// animales[4] = "Dragon"

// for (let i = 0; i < animales.length; i++){
//     console.log(animales[i]);
// }

//Métodos Arrays 

//Agrega elementos al final del array

// animales.push("Ardilla") ; lo contrario animales.pop();

//La posicion que quiere eliminar y cual item

animales.splice(5,1)

for(let i = 0; i < animales.length; i++){
    console.log(animales[i]);
}

//Agrega elementos al principio del array

// animales.unshift("Tigre");

//delete animales[5]; - No se usaaa!!!


