let fecha = new Date();

console.log(fecha);

//año

let year = fecha.getFullYear();
let mes = fecha.getMonth() + 1; //Siempre se agrega +1 pq la cuenta comienza desde 0
let dia = fecha.getDate(); // getDay() nos obtiene un numero del dia de la semana y getDate() obtiene el dia del mes
let hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();

// Las plantillas de cadena de caracteres (Bickticks)
// Es una caracteristica de JS, para crear cadenas dinamicas faciles
// Podemos interpolar facilmente valores variables a la cadena
// Insertar variables en una cadena de texto

let formatoFecha = `El día es: ${dia} del mes ${mes} del año ${year} y la hora actual es ${hora}`;

console.log(formatoFecha);

console.log(`El día es: ${dia} del mes ${mes} del año ${year} y la hora actual es ${hora}`);