//Ejercicio 2 Introduccion a JavScript
 
  const  suma = (a,b) => {
    let c = a + b;
    return c;
 }
 console.log("La suma de a y b es "+suma(5,10));

//Ejercicio 3 

 let nombre = prompt("¿Cual es tu nombre?");
 console.log("Hola, "+nombre+"!");

//Operdadores logicos y condicionales
//Ejercicio 1

 const mayor = (a,b) => {
  let c
  if(a >= b){
     c = a;
  }else if(b > a){
     c = b;
  }
  return c;
 }
 console.log("El mayor de los dos numeros es "+mayor(14,13));

//Ejercicio 2

let numero = prompt("Ingresa un numero y te dire si es par o impar");
numero = parseInt(numero);
const parximpar = (numero) => {
  if(numero % 2 == 0){
    console.log("El numero "+ numero +" es par");
  }else{
    console.log("El numero "+ numero +" es impar");
  }
}
parximpar(numero);

//Operadores de asignacion de bucles
//Ejercicio 1

let diez = 10;
console.log(diez);
while(diez > 1){
  console.log(diez = diez-1);
}

//Ejercicio 2

let numero2;
do{
  numero2 = prompt("Ingresa un numero mayor a 100: ");
  numero2 = parseInt(numero2);
  
  if(numero2 > 100){
    console.log("Ingresaste un numero mayor a 100: "+numero2 );
  }else{
    console.log("El numero ingresado no es mayor que 100 ingresalo de nuevo");
    
  }
}while(numero2 <= 100);

//Funciones de JavaScript
//Ejercicio 1

function esPar(a){
  let boolean;
  if(a % 2== 0){
    boolean = true;
  }else{
    boolean = false;
  }
  return boolean;
}
console.log("El numero "+19+" es par: "+esPar(19));
console.log("El numero "+18+" es par: "+esPar(18));

//Ejercicio 2

function convertirCelsiusAFarenheit(celsius){
  let farenheit;
  farenheit=(celsius*1.8)+32
  return farenheit;
}
console.log(30+"°C son equivalentes a "+convertirCelsiusAFarenheit(30)+"°F");

//Objetos en JavaScript
//Ejercicio 1

let persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid",

  cambiarCiudad : (ciudadnueva) => {
    persona.ciudad = ciudadnueva;
  }
}
console.log("Persona: "+ persona.nombre+","+persona.edad+","+persona.ciudad);
persona.cambiarCiudad("Barcelona");
console.log("Persona: "+ persona.nombre+","+persona.edad+","+persona.ciudad);

//Ejercicio 2

let libro = {
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  año: 1605,
  antiguedad: function() { 
    if ((2024 - this.año) > 10) { 
      boolean = true;
    } else {
      boolean = false;
    }
    return boolean;
  }
};

console.log("El libro " + libro.titulo + " es antiguo: " + libro.antiguedad());

//Arrays
//Ejercicio 1

let numeros = [1,2,3,4,5,6,7,8,9,10];
console.log("Numeros originales: "+numeros);
let numerosx2 = numeros.map(x => x * 2);
console.log("Numeros multiplicados: "+numerosx2);
 
//Ejercicio 2

let pares = []; 

for (let i = 0; pares.length < 10; i++) {
  if (i % 2 === 0) { 
    pares.push(i); 
  }
}
console.log("Primeros 10 números pares: " + pares);

//Introduccion al DOM
//Ejercicio 1

const boton = document.getElementById("buttonChanger"); 
const parrafos = document.querySelectorAll(".parrafo"); 

const estiloParrafo = () => {
  parrafos.forEach((parrafo) => {
    parrafo.classList.add('changeColor'); 
  });
}

boton.addEventListener("click", estiloParrafo); 

//Ejercicio 2

const texto = document.getElementById("texto");
const botton2 = document.getElementById("botton2");

botton2.addEventListener("click",()=>{
  alert("Has ingresado: "+texto.value);
})

//Eventos en DOM
//Ejercicio 1


const el1 = document.getElementById("el1");
el1.addEventListener("click",()=>{
  console.log(el1.textContent);
})


const el2 = document.getElementById("el2");
el2.addEventListener("click",()=>{
  console.log(el2.textContent);
})

const el3 = document.getElementById("el3");
el3.addEventListener("click",()=>{
  console.log(el3.textContent);
})

const el4 = document.getElementById("el4");
el4.addEventListener("click",()=>{
  console.log(el4.textContent);
})

//Ejercicio 2

const texto2Input = document.getElementById("texto2");
const boton3 = document.getElementById("botton3");
const boton4 = document.getElementById("botton4");

boton3.addEventListener("click", () => {
    texto2Input.disabled = true; 
});

boton4.addEventListener("click", () => {
    texto2Input.disabled = false;
});


// LocalStorage
//Ejercicio 1


const getDataInputs= () =>{
  const email = document.getElementById("texto5").value;
  localStorage.setItem("datos",JSON.stringify({
    email,
  }))
}
const resultado = document.getElementById('resultado');

const boton5 = document.getElementById('boton5').addEventListener("click",() =>{
  getDataInputs();

  const result = localStorage.getItem('datos');
  if(result){
    resultado.textContent= "Correo electronico"+result;

  }else{
   resultado.textContent="Los datos no existen ";
  }
})

const boton6 = document.getElementById('boton6').addEventListener("click",() => {
  const result = localStorage.removeItem('datos');

  if(result){
    resultado.textContent= "Correo electronico"+result;

  }else{
   resultado.textContent="Los datos no existen ";
  }
})


