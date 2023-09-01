//toString
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "blue"];
console.log(colors.toString());

//Join
console.log(colors.join('-'));

//declare an array different than colors and assign its values
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Concat
let combinacion = colors.concat(numbers);
console.log(combinacion);

//Push
numbers.push('10, 11, 12');
console.log(numbers);

//Pop
var animals = ["dog", "cat", "bird", "fish"];
animals.pop();
console.log(animals);

//Shift
animals.shift();
console.log(animals);

//Unshift
animals.unshift("horse");
console.log(animals);

//Splice
const colorEliminado = colors.splice(2, 1, "black");
console.log(colors);
console.log(colorEliminado);

//Slice
console.log(colors.slice(2, 4));
var mensaje = "Hola Mundo";
const msjCorto = mensaje.slice(0, 4);
console.log(msjCorto);

//Split
let Nombre = 'Juan Carlos, Ruben Flores, Pedro Martinez';
let arreglo = Nombre.split(',');
console.log(arreglo);

//IndexOf
let index = colors.indexOf("green");
console.log(index);

//lastIndexOf
let index2 = colors.lastIndexOf("blue");
console.log(index2);

//filter
let phoneNumbers = ["+52 1 55 1234 5678", "+1 123 456 7890", "+1 234 567 8901", "+1 345 678 9012", "+1 456 789 0123"];
let phoneNumbersUS = phoneNumbers.filter(phoneNumber => phoneNumber.includes("+1"));
console.log(phoneNumbersUS);   

//map
const usuarios = ['tina', 'danny', 'mark', 'bolaji'];
const lista = usuarios.map(elem => {
    return '<li>' + elem + '</li>';
});

const render = '<ul>' + lista.join('') + '</ul>';
document.write(render);

//reduce
const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma);

//forEach
const colores = ['rojo', 'verde', 'azul'];
colores.forEach((color, index) => {
    console.log(`${index} : ${color}`);
});

//every
const numeros2 = [11, 30, 39, 29, 15, 13];
let todosMayoresa10 = numeros2.every(numero => numero > 10);
console.log(todosMayoresa10);

//some
let algunmayora10 = numeros2.some(numero => numero > 10);
console.log(algunmayora10);

//include
let incluye = colores.includes('blanco');
console.log(incluye);

