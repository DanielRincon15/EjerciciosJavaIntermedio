//Fechas  - objeto fecha JS
//JS utilizara la zona horario del navegador
//Mostrara la fecha como cadena de texto completo

//Los objetos de fecha se crean con el newDate()

// Siempre que se ejecuta el new crea una nueva instancia de Date

let fecha = new Date();

console.log(fecha);

//año

let year = fecha.getFullYear();
let mes = fecha.getMonth() + 1; //Siempre se agrega +1 pq la cuenta comienza desde 0
let dia = fecha.getDate(); // getDay() nos obtiene un numero del dia de la semana y getDate() obtiene el dia del mes
let hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();

console.log(year + "/" + mes + "/" + dia + "-" + hora);

// El objeto date() u objeto de fecha son estaticos
// Es decir que el tiempo de la computadora corre pero los objetos fecha no

//JS cuenta los meses de 0 a 11
//Enero = 0
//Diciembre = 11
