import Button from "./button.js";

// Obtengo el elemento del DOM, el espacio dondese va a renderizar el botón
let myDiv = document.querySelector("#myApp");

// Creo una instancia del botón, el objeto que representa el botón
let myButton = new Button("Click me!");

// Conecto las 2 cosas anteriores, el botón y el espacio donde se va a renderizar
myDiv.innerHTML = myButton.render();