// ---------  BUCLES  ------------ //


// BUCLE funciona un numero i de veces
// for (let i = 0; i < 30; i++) {
//     console.log ("tu edada es " + i);
// }

// BUCLE que funciona segun una condicion se cumpla
// let j = 0;

// while (j < 20) {
//     console.log(j);
//     j++;
// }
//Otro ejemplo de BUCLE while
// let adivinanza = prompt("Elegi un numero del 1 al 10");

// while (adivinanza !=7){
//     console.log("Perdiste, segui participando");
//     adivinanza = prompt("Elegi un numero del 1 al 10");
// }

// console.log("Muy bien, adivinaste!!!");



// ---------  VARIABLES  ------------ //



// let edad = 14;
// let edadPermitida = 18;
// let edadVIP = 23;

// let manzana = 30;
// let pera = 25;

// const resultado = (edad < edadPermitida) && (manzana < pera); //AND
// const resultado = (edad < edadPermitida) || (manzana < pera); //OR
// console.log(resultado);


// ---------  CONDICION  ------------ //


//El signo ! revierte el resultado. Convierte un true en false
// if (edad >= edadVIP) {
//     console.log('¡Felicitaciones, podes entrar al VIP!');
// } else if (edad >= edadPermitida) {
//     console.log('¡Felicitaciones, podes entrar a la disco!');
// } else {
//     console.log('Ufa, no tenes la edad, te faltan, Te faltan ' + (edadPermitida - edad) + ' años.');
// }

// ---------  CLASE DE OBJETO  ------------ //

// const person = {
//     firstName:"John",
//     lastName:"Doe",
//     age:50,
//     eyeColor:"blue"
// };
//  console.log(person);


// ---------  CLASE ARRAY  ------------ //

// const cars = ["Saab", "Volvo", "BMW"];

// ---------  OPERADOR TERNARIO  ------------ //

// ? seria IF y : seria ELSE
// const frutaMasCara = manzana > pera
//     ? console.log('La más cara es Manzana')
//     : console.log('La más cara es Pera');

// ---------  FUNCIONES  ------------ //

// let numA = Number(prompt('Elegi un número'));
// let numB = Number(prompt('Elegi otro número'));

// function validate(){
//     if (numA > numB) {
//         return numA + numB;
//     }
// };

// const suma = validate();

// console.log(suma);
// console.log(suma + 20);


// let numA = Number(prompt('Elegi un número'));
// let numB = Number(prompt('Elegi otro número'));

// function validate(a,b){
//     if (a > b) {
//         return a + b;
//     }
// };

// console.log(validate(numA, numB));

//3 formas de resolver un mismo ejercicio:

//funcion declarada
// function maxNumber(numA, numB){
//     return numA > numB ? numA : numB;
// };

// const maxNumber = (numA, numB) => numA > numB ? numA : numB;

// const obtenerMayor = function(num1, num2){
//     if (num1 > num2){
//         return num1;
//     } else {
//         return num2;
//     }
// };

// FUNCION DECLARADA
// function validate(){
//     if (10 > 3) {
//         console.log('10 es mayor a 3');
//     }
// };


//FUNCION EXPRESADA

// const validate2 = function(){
//     if (10 > 3) {
//         console.log('10 es mayor a 3');
//     }
// };

// validate();
// validate2();

// ---------  ARROW FUNCTION  ------------ //

//Arrow Function // aca la flechita funciona como return

// const sumar = (a,b) => a+b;


// ---------  CALLBACKS  ------------ //

//CALLBACKS / mete una funcion dentro de otra funcion

// const maxNumber = function(num1, num2, callback) {

//     if (num1 > num2) {
//         return callback(num1);
//     } else {
//         return callback(num2);
//     }
// };

// maxNumber(27, 34, function(num) {
//     console.log("El resultado es: ", num);
// });

// maxNumber(10, 33, function(num){
//     alert("El resultado es: " + num);
// });

// maxNumber(50, 12, console.log);



// ---------  ARRAY  ------------ //


// const fruta = ['Manzana', 'Pera', 'Frutillas', 'Kiwi', 'Sandia'];

// console.log(fruta[0]);
// console.log(fruta.at(2)); //otra forma de traer el elemento de ese indice
// console.log(fruta.length); //return la cantidad de elementos que tiene

// const productos = ["Televisor", 'Microondas', 'Monitor', 'Celular', 'Parlante'];

// console.log(productos[2]); //return monitor
// console.log(productos.at(2));//return monitor

//caso donde tengo dentro de 1 array 2 cadenas de elementos
// const productos = [
//     ['Televisor', 'Monitor', 'Celular', 'Parlante'],
//     ['Microondas', 'Lavarropas', 'Secarropas', 'Heladera']
// ];

// console.log(productos[1][3]); //return Heladera
// console.log(productos[0].length);//return cantidad de elementos de ese array

// para modificar el valor original del ARray

//.push() agrega un valor al final

// const frutas = ['Manzana', 'Pera', 'Banana', 'Kiwi'];

// const nuevaFruta = prompt("Ingresa un nuevo producto");

// frutas.push(nuevaFruta);
// console.log(frutas);

//.unshift() agrega un valor al principio

//.pop() elimina el ultimo valor

//.shift() elimina el primer valor

//.concat()  combina 2 o mas arrays

// const lista = productos[0].concat(productos[1]);

// console.log(lista);

//.join()  crea una cadena de tezto a partir de todos los valores de un array,
//separados por el signo que pasemos como parametro

// console.log(lista.join('='));

//.split() crea un array a partir de una cadena de texto

//.slice() return una porcion del array desde un rango definido

//.sort()

// const precios = [100, 50, 22, 13, 296, 409];

// console.log(precios.sort((a,b) => a-b));

//.forEach()  te devuelve un array nuevo pero no tiene return, lo descarta luego de ejecutarlo

//ejemplo forEach hecho manualmente

// function imprimirFrutas(array, cb) {
//     for(let i = 0; i < frutas.length; i++) {
//         cb(frutas[i]);
//     }
// }

// imprimirFrutas(frutas, (frutas) => console.log(frutas));

// // aca esta el forEach que ya viene predefinido

// frutas.forEach((fruta) => console.log(fruta));


//.every()

//.some()

//.reduce() 

// const gananciasMensuales = [100, 50, 150, 300, 500];

// const gananciasTotales = gananciasMensuales.reduce((acc, act) => acc + act, 0);

// console.log(gananciasTotales);

// el ultimo parametro, en este caso el 0, es el valor inicial


//.map()  // te devuelve un array nuevo y lo regresa como un return

// console.log(frutas.map((fruta) => fruta + "Hola pepe")); 

//.filter() filtra los elementos que cumplen con cierta condicion

// .find()



// ---------  DOM  ------------ //


document.getElementById('section'); //hay muchos metodos para llegar a un nodo dentro del DOM

// document.childNodes

document.getElementById('search').value; //busca el valor del elemento con ese id y muestra el valor

document.querySelector('#search'); //seria igual a getElementById solo que aca le pasamos como parámetro el selector CSS



//Crear nodos para agregar elementos

// createElement('div')

// createTextNodee('Hola Mundo');

// padre.appendChild(hijo)

// nodo.innerText = 'Hola';

// nodo.innerHTML = '<p>Hola</p>';

// document.write = 'texto';


// const container = document.querySelector('inpuut');
// const input = document.getElementById('search');
// const btn = document.querySelector('#btn');
// const result = document.querySelector('#result');

// const labelNode = document.createElement('label');
// labelNode.innerText = 'Buscar';
// labelNode.setAttribute('for', 'search');

// labelNode.style.color = 'crimson';

// container.parentNode.insertBefore(labelNode, container);

// input.addEventListener('change', (e) => {
//     console.log(e.target.value);
// });

// btn.addEventListener('click', function () {
//     result.innerText = input.value;
// });



// ---------  EVENTOS  ------------ //

//Event Handlers / revisar documentacion


// ---------  EJERCICIO DE DOM  ------------ //

const task_description = document.querySelector('#task');
const task_deadline = document.querySelector('#deadline');
const task_status = document.querySelector('#status');
const btn = document.querySelector('#btn');

const tasks_section = document.querySelector('#tasks')
const tasks = [];

btn.addEventListener('click', function(){

    const task = document.createElement('article');

    task.innerHTML = 
    <>
    <h3>${task_description.value}</h3>
    <p>${task_deadline.value}</p>
    <p>${task_status.value}</p>
    </>

    tasks_section.appendChild(task);
});













