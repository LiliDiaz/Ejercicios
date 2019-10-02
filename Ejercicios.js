
//Numero 1
//palabras que tengas mas de 7 letras
let mensaje = "Pedro tiene almendras en un supercostal que lleva en su motocicleta";
let newMensaje = mensaje.replace (/[a-z]{7,}/g, "" );
console.log(newMensaje);

//Numero 2
//Expresiones que NO finalicen 

let mensaje1 = "Alfredo matar comer su jugo luchar entres sus juagr pensar al fin del mundos laptops comida lol";
let newMensaje1= mensaje1.replace(/[^aeiou\s]\b/g, " ")
console.log (newMensaje1);


//numero 3
//Palabras que inician con M

let mensaje2 = "MTania mata moscos en el Mlodo";
let newMensaje2= mensaje2.replace(/M|m(?=[^aeiou])/g, "-");
console.log (newMensaje2);


//Numero 4 faltaa
// Expresiones Comillas

let mensaje3 = "Expresiones 'encerradas' entre 'comillas'";
let newMensaje3 = mensaje3.replace(/'[\w]*'|'[\W]*'/g, "");
console.log(newMensaje3);


//Numero 5
//IPS

let mensaje4 = "La ip de mi laptop es 124.178.0.1 y la de mi hermano 1953.1547.1.3";
let newMensaje4 = mensaje4.replace(/\b\d{1,3}[.]\d{1,3}[.]\d{1,3}[.]\d{1,3}\b/g, "");
console.log(newMensaje4);


//Numero 6
//HORAS
let mensaje5 = "Son las  11:54:51, 16:45, ó 00:00. Una hora no puede ser 25:10:900 o 23.61.55.";
let newMensaje5 = mensaje5.replace(/\b[\d]{1,2}[:][\d]{1,2}[:][\d]{1,2}[., ]|\b[\d]{1,2}[:][\d]{1,2}[., ]/g, "");
console.log(newMensaje5);
//numero 7
// Telefonos
let m =/\b[0-9]{10}\b|\b[0-9]{3}[-][0-9]{3}[-][0-9]{2}[-][0-9]{2}\b/;
console.log(m.test("Mi numero es 985-115-09-51555, 9851150951000000055"));
//numeros 8
//correos electronicos

let mensaje7 = "Soy Lili y mi email es lilidiaz.2816@gmail.com el de la ecuela es lili.diaz@itsva.edu.mx pero tengo el lili.9818lol";
let newMensaje7 = mensaje7.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+/g, "");
console.log(newMensaje7);

//numero9
// URl's

let mensaje8 = "mi pagina web https://www.facebook.com/ e igual tengo esta pagina web https://www.google.com/";
let newMensaje8 = mensaje8.replace(/https:..w{3}[.].*?[.]com./g,"");
console.log(newMensaje8);

//numero 10
//codigo postal

let mensaje9 = "El codigo postal de valladolid es 97780 de alemania es 256935";
let newMensaje9 = mensaje9.replace(/\b[0-9]{1,4} | \b[0-9]{6,}\b/g, " ");
console.log(newMensaje9);